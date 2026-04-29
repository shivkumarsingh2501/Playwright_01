pipeline {
    agent any

    stages {

        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Install') {
            steps {
                bat 'npm ci'
            }
        }

        stage('Install Browsers') {
            steps {
                bat 'npx playwright install chromium'
            }
        }

        stage('Run Tests') {
            steps {
                bat 'npx playwright test --project=chromium'
            }
        }
    }

    post {
        success {
            echo 'Build Passed ✅'
        }
        failure {
            echo 'Build Failed ❌'
        }
    }
}