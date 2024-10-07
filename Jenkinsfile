pipeline {
    agent any
    triggers {
        githubPush()
    }
    stages {
        stage('Checkout Code') {
            steps {
                // Checkout the code from the repository
                checkout scm
                
                // Ensure we are on the correct branch (force checkout to branch)
                script {
                    sh 'git checkout production' // replace 'production' with the branch you want to use
                }
            }
        }

        stage('Check Branch') {
            steps {
                script {
                    // Manually detect branch name using git
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

        stage('Clean Docker Images') {
            when {
                expression { sh(script: "git rev-parse --abbrev-ref HEAD", returnStdout: true).trim() == 'production' }
            }
            steps {
                script {
                    sh '''
                        cd ariful-org-nextjs-prisma
                        docker-compose down
                        docker system prune -af --volumes
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
                        cd ariful-org-nextjs-prisma
                        docker-compose build
                        docker-compose up -d
                    '''
                }
            }
        }
    }
}
