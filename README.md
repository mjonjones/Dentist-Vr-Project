# Virtual Reality Dentistry Tour  

## Introduction

The following is the README.md for Team 12's Virtual Reality project. This project was created for Cardiff University's Dental Surgery with collaboration from the National Software Academy (Newport). The project is a functioning prototype.

Young patients (6-Year-Old) are anxious and nervous about attending the dentists. They are generally forced to go by their parent(s) and a dental check-up is hard to perform on them. This Virtual Reality application was bulit to give the patients an immersive, child-friendly experience of the dentists before they go for their appointment, helping to ease their anxiety.


## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on AWS.

### Prerequisites

You will require Node.js to have access to Node Package Manager (npm), which is used to install dependencies, run the tests, build the application and run it. Node can be downloaded here: https://nodejs.org/en/ 

Git is also required in order to clone the repository. You will require to have an account and git bash to run the clone command. The repository is hosted here: https://github.com/mjonjones/Dentist-Vr-Project


### Installation and running dev build

Navigate to the repository on GitHub and copy the 'clone with ssh' link. Open a Git Bash prompt in a directory of your choice and execute the following command:

```
git clone git@github.com:mjonjones/Dentist-Vr-Project.git
```

This will clone the source code into a directory called Dentist-Vr-Project. In the same prompt execute the following command:

```
cd Dentist-Vr-Project
```

This will change directories so you can run commands from here. You will then need to install the dependencies. In the prompt execute the following command:

```
npm install
```

There are a lot of dependencies for this project, so it may take a while. Once complete you will be ready to run the application. This is done by executing this command:

```
npm start
```

Congratulations! You have the application running on your localmachine at https://localhost:8081/vr/


## Running the tests

Explain how to run the automated tests for this system

### Break down into end to end tests

Explain what these tests test and why

```
Give an example
```

## Deployment

We have used Amazon Web Services to deploy the application onto both desktop and mobile devices. We have used only two services and only the free tier to show its potential deployment - VPC and EC2. Read further to learn more about the setup we used, which can be replicated for your use. 

### VPC and EC2

The VPC has no IPv6, and 2 subnets - These subnets are deployment regions in the Eu-London Zone.

The EC2 is deployed into the VPC and has no Ipv4 related to it. In order to connect to it, there is an allocated Elastic IP. As part of its security group, there is a rule allowing outcoming traffic from anywhere on port 8081. This is because the application launches onto 8081. Upon creating this application you will recieve a .pem key which you will need to save.

### Connecting to the EC2 instance

When the EC2 instance is setup and running on the VPC, you will need to install Node.js on it. You can connect to it using Putty or SSH protocol. The SSH protocol instructions are listed below:

In the directory where you saved the .pem key, open a git bash command prompt and run the following:

```
chmod 400 <key-name.pem>

ssh -i <Key-name.pem> ec2-user@<Elastic-Ip-Address>
```
Please note that if this is not a UNIX CMD like git bash, these commands won't work.

This will connect you to the instance. Once inside it run the following commands to update the instance and install node:

```
sudo yum update -y

curl --location https://rpm.nodesource.com/setup_6.x | sudo bash -

sudo yum install -y nodejs

```

Now your setup to copy the application! execute the following to leave the instance:

```
exit
```

### Deploying the app onto the EC2 instance

In a directory that contains the project and the .pem key open a git bash command prompt and run the following:

```
scp -r -i <key-name.pem> <Dentist-Vr-Project> ec2-user@<Elastic-Ip-Address>:/home/ec2-user//Dentist-Vr-Project
```
This will copy your code onto the instance. Once done, reconnect to the instance and cd into the Dentist-Vr-Project directory. Run the following:

```
npm start
```

Then open a browser at https://Elastic-IP:8081/vr/

Congratulations! You have successfully deployed the application onto AWS. It is now accessible on mobile too!


## Built With

* [ReactJS](https://reactjs.org/) - The web framework used
* [Node/NPM](https://nodejs.org/en/) - Dependency Management and build.


## Contributing

Please read the CONTRIBUTION.MD for details on our code of conduct.

## Versioning

Github is being used to version control the project. Our branching policy is as follows, Where 'M' stands for merge:

```
master
|
├── dev
|   |
|   ├── Story/Feature Branch
|   |   |
|   |   ├── Optional Branch
|   |   |   |
|   |   ├── M
|   |   |
|   ├── M
├── M
|
```
master and dev are both protected branches and require a review on the pull request, before the branch is merged.

## Authors

* **Morgan Jones** - *Design, Development* - [mjonjones](https://github.com/mjonjones)
* **Joey Gmaij** - *Design and Development* - LINK HERE
* **Ciara Langton** - *Design and Development* - LINK HERE
* **Masroor Unar** - *Design and Development* - LINK HERE

See also the list of [contributors](https://github.com/your/project/contributors) who participated in this project.

## Acknowledgments

* The LiveTour Library was an incredible tool to use and we look forward to seeing its evolution in the future.
