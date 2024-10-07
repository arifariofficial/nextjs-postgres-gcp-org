pipeline {
    agent any
    stages {
        stage('Pull Code') {
            steps {
                script {
                    // Check if the repository already exists
                    if (fileExists('ariful-org-nextjs-prisma')) {
                        // Navigate to the repository and pull the latest code
                        dir('ariful-org-nextjs-prisma') {
                            sh 'git pull origin production'
                        }
                    } else {
                        // Optional: You could print a message if the directory doesn't exist
                        echo "Repository directory not found. Exiting."
                        currentBuild.result = 'FAILURE'
                        return
                    }

                    // Ensure we are on the 'production' branch
                    def branch = sh(script: "cd ariful-org-nextjs-prisma && git rev-parse --abbrev-ref HEAD", returnStdout: true).trim()
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
                expression { env.BRANCH_NAME == 'production' }
            }
            steps {
                script {
                    // Navigate to the directory and clean Docker resources
                    sh '''
                        cd ariful-org-nextjs-prisma
                        docker-compose down
                        docker system prune -f
                        docker volume prune -f
                        docker image prune -f
                    '''
                }
            }
        }

        stage('Docker Build and Up') {
            when {
                expression { env.BRANCH_NAME == 'production' }
            }
            steps {
                script {
                    // Build and bring up the Docker containers
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
