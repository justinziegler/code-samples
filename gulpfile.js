const gulp = require('gulp');
const useref = require('gulp-useref');
const cachebust = require('gulp-cache-bust');
const execSync = require('child_process').execSync;
const { exec } = require('child_process');
const rename = require('gulp-rename');
const package = require('./package.json');

function copyStatic() {
    return gulp.src(['src/client/static/**/*'])
        .pipe(gulp.dest('./build/client/static/'));
}

function copyAssets() {
    return gulp.src(['src/client/assets/**/*'])
        .pipe(gulp.dest('./build/client/assets/')) ;
}

function copyServer() {
    return gulp.src('src/server/**/*')
        .pipe(gulp.dest('./build/server/'));
}

function copyModules() {
    return gulp.src('./node_modules/**/*')
        .pipe(gulp.dest('./build/node_modules/'));
}

function doUseref() {
    return gulp.src('src/client/views/*.html')
        .pipe(useref())
        .pipe(gulp.dest('./build/client/views/'));
}

function bustCache() {
    return gulp.src('./build/client/views/*.html')
        .pipe(cachebust({
            type: 'timestamp'
        }))
        .pipe(gulp.dest('./build/client/views/'));
}

function copyPackageJson() {
    return gulp.src("package.json").pipe(gulp.dest("./build"));
}

function moveAssetsCorrectly() {
    return gulp.src('./build/client/views/assets/*').pipe(gulp.dest("./build/client/assets/"));
}

function packageApp() {
    var sha = execSync("git rev-parse --short=8 HEAD",
    (err, stdout, stderr) => {
      if (err) {
        // node couldn't execute the command
        return;
      }
    });
    sha = String(sha).trim();

    var branch = execSync("git rev-parse --abbrev-ref HEAD",
    (err, stdout, stderr) => {
      if (err) {
        // node couldn't execute the command
        return;
      }
    });
    branch = String(branch).trim();
    branch = String(branch).replace('/','-');
    
    var buildNumber = `${branch}-${sha}-${package.version}`;
    console.log(`Commit sha is ${sha}`);
    console.log(`##teamcity[setParameter name='env.GIT_REVISION' value='${sha}']`);
    console.log(`## Build number is ${buildNumber}`);
    console.log(`##teamcity[buildNumber '${buildNumber}']`);

    console.log("[INFO] Selecting Dockerrun...");
    if (process.env.build_type == "live") {
        gulp.src("Dockerrun.aws.production.json")
            .pipe(rename(function(path) {
                path.basename = "Dockerrun.aws";
                path.extname = ".json";
            }))
            .pipe(gulp.dest("."));

    } else {
        gulp.src("Dockerrun.aws.development.json")
            .pipe(rename(function(path) {
                path.basename = "Dockerrun.aws";
                path.extname = ".json";
            }))
            .pipe(gulp.dest("."));
    }

    var env_extensions;
    if (process.env.build_type == "live") {
        env_extensions = ".ebextensions/prod"
    } else if (process.env.build_type == "sandbox") {
        env_extensions = ".ebextensions/sandbox"
    } else {
        env_extensions = ".ebextensions/dev"
    }

    console.log("[DEBUG] Environment extensions dir: ", env_extensions);

    console.log("[DEBUG] Setting trying to create zip_cmd...");

    var zip_cmd = `zip -r -q lull-${buildNumber}.zip build proxy ${env_extensions} Dockerrun.aws.json`;

    console.log("[DEBUG] zip_cmd: ", zip_cmd);

    console.log("[INFO] Starting to pack zip...");

    return exec(zip_cmd,
        (err, stdout, stderr) => {
        if (err) {
            // node couldn't execute the command
            console.log(err);
            return;
        }
            // the *entire* stdout and stderr (buffered)
            console.log(`stdout: ${stdout}`);
            console.log(`stderr: ${stderr}`);

            console.log("[INFO] Packing zip complete...");

            return 'done';
        });
}

exports.packageApp = packageApp;

exports.default = gulp.series(copyStatic, copyAssets, copyServer, copyModules, doUseref, bustCache, copyPackageJson, moveAssetsCorrectly);