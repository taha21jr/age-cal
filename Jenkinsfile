pipeline {
    agent any
    stages {
        stage('Test on Windows') {
            steps {
                bat '''
                    git clone https://github.com/Tahahusnain/age-cal.git
                    cd age-cal
                    dir
                    if exist deploywebsite.bat (
                        deploywebsite.bat
                    ) else (
                        echo deploywebsite.bat not found
                        exit 1
                    )
                '''
            }
        }
    }
}
