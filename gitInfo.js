/*
    For this section of the assessment you will be putting together a cheat sheet for common git commands.  
    You'll provide the command as well as what it does. 
*/

//////////////////PROBLEM 1////////////////////
/*
    Create a variable called 'gitDefinition'.
    It should be a string containing your best definition of what Git is.
*/

//CODE HERE

const gitDefinition = "Git is a distributed version control system that allows developers to track changes to their code over time. It provides tools for managing code repositories, making it easy to collaborate with others on the same codebase, and revert to previous versions if necessary. Git is widely used in software development and is an essential tool for modern programmers.";




//////////////////PROBLEM 2////////////////////
/*
    Create a variable called 'gitHubDefinition'.  
    It should be a string containing your best definition of what GitHub is.
*/

//CODE HERE

const gitHubDefinition = "GitHub is a web-based platform that provides tools for managing Git repositories. It allows users to host and share their code online, collaborate with others on the same projects, and track changes to their code over time. GitHub provides features such as issue tracking, pull requests, and code reviews, which make it easy for developers to work together and maintain high-quality code. It is widely used in the software development industry and has become an essential tool for modern programmers.";


//////////////////PROBLEM 3////////////////////
/*
    Create a variable called 'gitInitDefinition'.  
    It should be a string containing your best definition of what 'git init' does.
*/

//CODE HERE

const gitInitDefinition = "`git init` is a command in Git that initializes a new Git repository in the current working directory. When you run `git init`, it creates a new .git subdirectory in the current directory, which contains all the necessary files and directories for Git to start tracking changes to your code. After running `git init`, you can start adding files to your repository and committing changes to track the history of your project. This command is used for initializing a new repository and should be executed only once for each new project.";

//////////////////PROBLEM 4////////////////////
/*
    Create a variable called 'gitCloneDefinition'.  
    It should be a string containing your best definition of what 'git clone' does.
*/

//CODE HERE

const gitCloneDefinition = "`git clone` is a command in Git that creates a copy of an existing Git repository. When you run `git clone`, it copies all the files and directories from the remote repository to your local machine, including the entire history of changes. `git clone` is used for creating a local copy of a remote repository, making it easy for developers to work on the same codebase without having to share access to the same server. You can use `git clone` to create a local copy of any public Git repository, or one that you have access to with the appropriate permissions. After running `git clone`, you can start working on the codebase as if it were your own local repository.";

//////////////////PROBLEM 5////////////////////
/*
    Create a variable called 'gitStatusDefinition'.  
    It should be a string containing your best definition of what 'git status' does.
*/

//CODE HERE

const gitStatusDefinition = "`git status` is a command in Git that displays the current status of the local repository. When you run `git status`, it shows which files have been modified, added, or deleted since the last commit, and which files are currently staged for the next commit. This command is used for keeping track of changes to your code and making sure you don't accidentally lose any work. It is a useful tool for checking the status of your repository before making a commit, and for troubleshooting any issues that may arise during development. After running `git status`, you can see a summary of the current state of your repository and take appropriate action to continue working on your codebase.";


//////////////////PROBLEM 6////////////////////
/*
    Create a variable called 'gitAddDefinition'.  
    It should be a string containing your best definition of what 'git add' does.

    Create another variable called 'gitAddCode'.  
    It should be a string containing the code to add all files.
*/

//CODE HERE

const gitAddDefinition = "`git add` is a command in Git that stages changes to be committed to the repository. When you run `git add`, it adds modified or new files to the staging area, which is a temporary storage for changes that will be included in the next commit. This command is used for preparing changes for commit and is typically run multiple times before making a commit. After running `git add`, you can use `git status` to see which files have been staged and are ready to be committed.";

const gitAddCode = "git add .";


//////////////////PROBLEM 7////////////////////
/*
    Create a variable called 'gitCommitDefinition'.  
    It should be a string containing your best definition of what 'git commit' does.

    Create a variable called 'gitCommitCode'.  
    It should be a string containing the code to commit using the message "initial commit".
*/

//CODE HERE


const gitCommitDefinition = "`git commit` is a command in Git that saves changes to the local repository. When you run `git commit`, it creates a new commit with all the changes that have been staged using `git add`. This command is used for saving changes to the repository and creating a snapshot of the current state of the project. After running `git commit`, you can use `git log` to see a history of all commits in the repository, including the message and author of each commit.";

const gitCommitCode = "git commit -m 'initial commit'";

//////////////////PROBLEM 8////////////////////
/*
    Create a variable called 'gitPushDefinition'.  
    It should be a string containing your best definition of what 'git push' does.
*/

//CODE HERE


const gitPushDefinition = "`git push` is a command in Git that uploads local repository content to a remote repository. When you run `git push`, it transfers committed changes from your local repository to the remote repository, which can be located on services like GitHub or Bitbucket. This command is used for sharing code with others and making it available online. After running `git push`, other developers can clone the repository and pull the changes into their own local copies. It is a critical step in the development process for collaborating with others and ensuring that everyone is working with the latest version of the code.";
