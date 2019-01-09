# Virtual Reality Dentistry Tour

## Introduction

The following is the README.md for Team 12's Virtual Reality project. This project was created for Cardiff University's Dental Surgery with collaboration from the National Software Academy (Newport). The project is a functioning prototype.

Young patients (6-Year-Old) are anxious and nervous about attending the dentists. They are generally forced to go by their parent(s) and a dental check-up is hard to perform on them. This Virtual Reality application was bulit to give the patients an immersive, child-friendly experience of the dentists before they go for their appointment, helping to ease their anxiety.

## Project Descirption

This project was built on top of LiveTourLab. LiveTourLab is a framework built on top of React VR, which is also a framework for the creation of interactive 360 experiences that run in your web browser. We chose this framework as opposed to other technologies because it allowed us to get something up and running very quickly and it had a short learning curve so the rest of the team was able to pick it up and start developing very quickly. Furthermore LiveTourLab was in fact an upgrade to the current system preferred by the clients. They wanted to build on top of their browser based virtual tour and wanted to make it more interactive and child friendly.

### How LiveTourLabs Works

The libray provides a React Component called LiveTour. This component takes a prop called tourURI which is a JSON file. This JSON file is the virtual environment and is rendered by the component when run. 

Custom components can be made for the tour and function similarly to the LiveTour component. They take a prop which include the X,Y coords of the feature to be displayed in the 360 view.

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

To run the unit tests, enter the follwoing command in a terminal in the root directory:
```
npm test
```

This will run 4 tests

### Break down into end to end tests

We have used jest to cover our code with tests. Since React-VR hasn't a native module for testing it uses React-Native. 

Therefore not all components were be able to tested but tests have been included where possible.

This includes jest unit tests of the Quiz componenet and Snapshot tests of the Title component.

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
npm install
npm start
```

Then open a browser at https://Elastic-IP:8081/vr/

Congratulations! You have successfully deployed the application onto AWS. It is now accessible on mobile too!

## Technical features

### Welsh Switch

We used React router to create a switch for the Welsh language, the code adapted from https://github.com/LiuC520/react-vr-router works with react router to change language on click.

The main component in the app, Index-VR is where we define where the app should start, this is where we direct the app to start with the English version, which is defined in English.js. English.js includes the main live tour component which has Router and other components within that component. This is a requirement of live tour lab was such that any custom components had to be built on top of the framework. This is where we created a custom component which us called RouteEnglish and RouteWelsh which will allow the user to switch between the languages.

The custom components RouteEnglish and RouteWelsh serve as a button built on top of the framework that once clicked will redirect the user to the preferred language.

The components English and Welsh serve as the running version of the apps and the user can currently only decide which language to use on the main entrance screen. Both components fire up an instance of the app in the preferred language.

The approach and justification for this method stemmed from the limitations and the restrictions of live tour lab. Anything we did on live tour had to be built as a custom component. To simplify the approach, we created separate components for the different language versions so that it is clear to the user what is happening. We used the RouteEnglish and RouteWelsh components to differentiate the two buttons and differentiate the two components to run an instance of the preferred language.

In the future in order to improve the app we would use a welcome screen which will serve as a menu which will also have a disclaimer and use guide. From the welcome screen the user can select the language and load up an instance. This would be possible to build on this project through a dom overlay.


## Design justification

The design on the navigation buttons the quizzes and the colour scheme was a requirement of the clients. They wanted us to use child friendly primary colours and we had to choose something that is easy on the eye.

## Built With

- [ReactJS](https://reactjs.org/) - The web framework used
- [Node/NPM](https://nodejs.org/en/) - Dependency Management and build.

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

- **Morgan Jones** - _Design and Development_ - [mjonjones](https://github.com/mjonjones)
- **Joey Gmaj** - _Design and Development_ - [JoeyG448](https://github.com/JoeyG448)
- **Masroor Unar** - _Design and Development_ - [Masroor-Unar](https://github.com/Masroor-Unar)
- **Ciara Langton** - _Design and Development_ - [ciaraax](https://github.com/ciaraax)

See also the list of [contributors](https://github.com/your/project/contributors) who participated in this project.

## Acknowledgments

- The LiveTour Library was an incredible tool to use and we look forward to seeing its evolution in the future, found [here](https://livetourlab.com/docs)
- Toilet Icon made by [FreePik](https://www.flaticon.com/free-icon/toilet_195439) from www.flaticon.com
- Background music taken from [BenSound](https://www.bensound.com/royalty-free-music/track/little-idea) from www.bensound.com
- Jared Nielson - April 2018 - ReactVR: Audio Spacialization and Click Events with the Sound Component - https://medium.com/@jarednielsen/reactvr-audio-spacialization-and-click-events-with-the-sound-component-4c5e9fd59388
- The react docs were used with assitence with Conditional Rendering, found [here](https://reactjs.org/docs/conditional-rendering.html)
- This link was used to help build the React Router and can be found [here](https://github.com/LiuC520/react-vr-router)