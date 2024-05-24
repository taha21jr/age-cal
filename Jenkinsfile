pipeline {
    agent any
    stages {
        stage('Test on Windows') {
            steps {
                bat '''
                    git clone https://github.com/Tahahusnain/age-cal.git
                    cd age-cal
                    dir
                    deploywebsite.bat
                '''
            }
        }
    }
}
