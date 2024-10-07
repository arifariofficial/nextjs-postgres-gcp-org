pipeline {
    agent any
    triggers {
        githubPush()
    }
    stages {
        stage('Checkout Code') {
            steps {
                // Explicitly checking out the production branch (or whatever branch is being pushed)
                checkout([
                    $class: 'GitSCM', 
                    branches: [[name: '*/production']],  // Use production branch here
                    doGenerateSubmoduleConfigurations: false, 
                    extensions: [], 
                    submoduleCfg: [], 
                    userRemoteConfigs: [[url: 'https://github.com/arifariofficial/ariful-org-nextjs-prisma']]
                ])
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
