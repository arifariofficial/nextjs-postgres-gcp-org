pipeline {
    agent any
    stages {
        stage('Pull Code') {
            steps {
                script {
                    // Pull the latest code from the Git repository
                    git branch: 'production', url: 'https://github.com/arifariofficial/ariful-org-nextjs-prisma'

                    // Check if the current branch is 'production'
                    if (env.BRANCH_NAME != 'production') {
                        echo "Skipping build. Current branch is not 'production'."
                        currentBuild.result = 'SUCCESS'
                        return
                    }
                }
            }
        }

        stage('Clean docker images') {
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
