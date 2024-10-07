pipeline {
    agent any
    triggers {
        githubPush()
    }
    stages {
        stage('Check Workspace') {
            steps {
                script {
                    // List files in the current workspace to debug the issue
                    sh 'pwd'
                }
            }
        }
        stage('Checkout Code') {
            steps {
                checkout scm
                script {
                    sh 'git checkout production'
                }
            }
        }


        stage('Check Branch') {
            steps {
                script {
                    def branch = sh(script: "git rev-parse --abbrev-ref HEAD", returnStdout: true).trim()
                    echo "Branch detected: ${branch}"

                    if (branch != 'production') {
                        echo "Skipping build. Current branch is not 'production'."
                        currentBuild.result = 'SUCCESS'
                        return
                    }
                }
            }
        }

        stage('Clean Docker Images and git pull') {
            when {
                expression { sh(script: "git rev-parse --abbrev-ref HEAD", returnStdout: true).trim() == 'production' }
            }
            steps {
                script {
                    // Ensure the directory path is correct based on the debug output from the previous stage
                    sh '''
                     # Mark directory as safe for Git operations
                        git config --global --add safe.directory /home/sipeai18/ariful-org-nextjs-prisma

                        # Navigate to the project directory
                        cd /home/sipeai18/ariful-org-nextjs-prisma

                        # Pull latest changes from production
                        git pull origin production

                        # Bring down Docker containers
                        docker-compose down

                        # Clean up unused Docker resources
                        docker system prune -f
                        docker volume prune -f
                        docker image prune -f
                    '''
                }
            }
        }

        stage('Docker Build and Up') {
            when {
                expression { sh(script: "git rev-parse --abbrev-ref HEAD", returnStdout: true).trim() == 'production' }
            }
            steps {
                script {
                    sh '''
                        cd /home/sipeai18/ariful-org-nextjs-prisma
                        docker-compose build
                        docker-compose up -d
                    '''
                }
            }
        }
    }
}
