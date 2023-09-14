
let VisionComp = React.createElement("ol",{},
                                    React.createElement("li",{},"To be the best"),
 React.createElement("li",{},"To work smart"),  React.createElement("li",{},"To work hard"),
                                    );


let VisionHead = React.createElement("h2",{'className':'text-primary bg-secondary'}," Vision!")

let  root = ReactDOM.createRoot(mountNode);
root.render([VisionHead,VisionComp]);








// //created a Pro carrierbutton
// let ProButton = React.createElement("button", {"className":"btn btn-primary"}, "Procareer");
// //get the parent
// let root = ReactDOM.createRoot(mountNode);
// //render this to the parent
// root.render(ProButton);

// // //created the element
// let Myh1 = React.createElement("h1",{}," Procareer Welcomes you");
// //get the parent
// let root = ReactDOM.createRoot(mountNode);
// //render this to the parent
// root.render(Myh1);
// root.render([Myh1,ProButton])

// //create  a div with these 2 elements

// let ProDiv = React.createElement('div',{},                                 React.createElement("h1",{}," Procareer Div Welcomes you"),React.createElement("button", {"className":"btn btn-primary"}, "Procareer"))
// let root = ReactDOM.createRoot(mountNode);
// // // //render this to the parent
// root.render(ProDiv);



    <script>
   
    let ProHeading = React.createElement("h1",{'className':'text-primary'},'Welcome to React World');
    //created a Pro carrierbutton
    let ProButton = React.createElement("button", {"className":"btn btn-primary"}, "Procareer");
    let ProDiv = React.createElement('div',{},[ProHeading,ProButton]);  
   
    let root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(ProDiv);


   
    </script>