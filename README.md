Need to download code or clone in local device
First we need to execute command

**npm install
**
Then need to execute command ng server -o for accessing page
if we need to deploy code on iis server then execute below command
**ng build --configuration production
**
Above command will create dist folder in root director of project , please use dist folder content to deploy on server.

Optinal
if we are getting eroro which are related to css loader then execute below command 

****npm install css-loader --save 
**

**npm install style-loader --save
**

**npm install --save diagram-js-minimap**
**
if we need to install bpmn-js file then execute below commad

**npm install --save bpmn-js
**

**Ui flow
**
There are two option in ui landing page 
1.Create New Flow chart diagram from bpmn-js library
2.Open existing BPMN diagram from bpmn-js library

You can download the bmpn file with extension bpmn and we can open existing diagram as well.

<img width="621" alt="image" src="https://github.com/imaginatexr/conditionalprocedurediagram/assets/149040365/ca598587-8143-4f38-a35f-7138585b5a29">

