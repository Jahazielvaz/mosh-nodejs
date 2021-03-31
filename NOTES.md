## NPM COMMANDS TO LEARN
- Listing All Installed Dependencies: $ npm list
- Listing only main packages. No sub-dependencies: $ list --depth=0
- Viewing 1 package along with all its' dependencies: $ npm view packagename (For example: npm view mongoose)
- Viewing 1 packages dependencies, only: $ npm view packagename dependencies
- Viewing all versions ever released of the selected package: $ npm view packagename versions (Example: npm view mongoose versions)

- Looking for outdated package releases: $ npm outdated : This command will give you 3 buckets. The current, wanted, and latest. Current is the packages you currently have.Wanted is based on specifications within your package.json files. Typically only works for minor and patch releases.

Updating all packages to the wanted: $ npm update.

------------------------

## PUBLISHING NPM PACKAGES

### Creating The Package:
- You would just create a node project with the functionality you want the package to have.
- Remember to create an index.js module as the entry point

### Signing Up/Logging In To Nodejs  
- Sign Up: (terminal): $ npm adduser. Afterwards, select your username, password, email, etc.
- Log In: (terminal): $ npm login. Afterwards, just run your credentials

### Publishing The Package
- Make sure you're on the parent directory of the entry point (usually index.js) to your package
- (terminal): $ npm publish

### Publishing Newer Versions Of Your Package
- (terminal): npm version updateType (You can use one of 3 flags here: major, minor, or patch. Major are changes that would break someone's app. Minor is more like upgrades that still contain the previous options. patch is for any bug fixes or anything like that)
