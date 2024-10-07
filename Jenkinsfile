pipeline {
    agent any
    stages {
        stage('Pull Code') {
            steps {
                script {
                     // Pull the latest code from the Git repository
                    git branch: 'production', url: 'https://github.com/arifariofficial/ariful-org-nextjs-prisma'

                     // Check if the current branch is 'production'
                    if (env.GIT_BRANCH != 'origin/production') {
                        echo "Skipping build. Current branch is not 'production'."
                        currentBuild.result = 'SUCCESS'
                        return
                    }
                }
            }
        }
    }
        stage('Clean docker images') {
            when {
                expression { env.GIT_BRANCH == 'origin/production' }
            }
            
            steps {
                sh 'cd ariful-org-nextjs-prisma'
                sh 'docker-compose down'
                sh 'docker system prune -f'
                sh 'docker volume prune -f'
                sh 'docker image prune -f'
            }
        }

        stage('Docker Build and Up') {
            when {
                expression { env.GIT_BRANCH == 'origin/production' }
            }

            steps {
                sh 'docker-compose build'
                sh 'docker-compose up -d'
            }
        }
}
