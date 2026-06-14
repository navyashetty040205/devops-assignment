pipeline {
agent any

```
stages {

    stage('Checkout') {
        steps {
            git 'https://github.com/navyashetty040205/devops-assignment.git'
        }
    }

    stage('Code Quality - ESLint') {
        steps {
            sh 'npm install'
            sh 'npx eslint . || true'
        }
    }

    stage('Build Docker Image') {
        steps {
            sh 'docker build -t devops-assignment .'
        }
    }

    stage('Docker Push') {
        steps {
            sh 'docker tag devops-assignment navyashetty0402/devops-assignment:latest'
            sh 'docker push navyashetty0402/devops-assignment:latest'
        }
    }
}
```

}
