pipeline {
    agent any
    triggers {
        githubPush() // This will trigger the job when a push happens
    }
    stages {
        stage('Check Branch') {
            steps {
                script {
                    if (env.BRANCH_NAME != 'production') {
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
                        docker system prune -af --volumes
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
