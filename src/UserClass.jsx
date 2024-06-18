/*
    This is how we create a Class Based COmponent in React which is old way of creating components.
    Here we need to extend the class we create from React.Component (which requires importing React from 'react') and use render() method and inside this remnder method's scope, we write the piece of jsx we wish to return as our component and we export it same as functional component and import and use also normally.
*/
// The class based component created below in used in About.jsx page.
import React from "react";

class UserClass extends React.Component {


    //react lifecycle method diagram: visit this named website for details.

    /*
    Order of Methods as per call order;
        1. constructor()
        2. render()
        3. componentDidMount()
    */


        /*
        Say if there are more than 1 child component then this is component lifecycle that react follows:
            1. Parent Constructor
            2. Parent render
            3. First Child Constructor
            4. first Child render
            5. Second Child Constructor
            6. Second Child render
            7. First Child ComponentDidMount
            8. Second Child ComponentDidMount
            9. Parent ComponentDidMount
        The above order is followe din case of more than 1 child.
        If there is only 1 child then  order is this order from above numbering: 1,2,3,4,7,9.

        -ComponentDidMount is called at last same as when we use useEffect hook as in both these methods we make API calls and making API call after rendering component make App faster as component doesn't need to wait for API data to get rendered, thus providing better ux and efficiency.
        */

    //Constructor of a class is called when class is loaded or i.e; class is instantiated.
    //it is called 1st among all other methods of class.
    //After the Contructor, the render() is called.
    //this below methods is required in case we need to pass dynamic data from component using props.
    constructor(props){
        //using props
        super(props);
        //using state variable:
        this.state = {
            count: 0,
            //we can give more state variable separated by comma in this scope only.
            //state variable for fetching data:
            userInfo: {
                name:"Avi", //default value
            },
        };
        // console.log("Constructor Called")
    }

    //This is a special function provided in classed based components, which is called after the component is mounted or finished loading on app. (i.e; called when component's mounting or rendering is finished)
    async componentDidMount(){
        // console.log("Component Did Mount Called.");
        const data = await fetch("https://api.github.com/users/AVIN4SH");
        const json = await data.json();
        // console.log(json); //this is to see data fetched in console.

        this.setState({
            userInfo: json,
        });
    } //this is generally used to make API call.
    
    /* We make API calls here in componentDidMount in class based component and in function component in the useEffect hook as react optimizes by this as first we render the components and then make API call so that component doesn't need to wait for API data to get render and thus this increases quality of ux. */

    componentDidUpdate(){
        // console.log("Component Did Update");
        //This method is called when our component is updated whether from props, state variable or api data gets inputed.
    }

    componentWillUnmount(){
        // console.log("Component Will Unmount");
        //This method is called when our component is unmounted from our page.(This may happen when we go to another page)
    }

  render() {
    const {name1, location1} = this.props; //here we destructure as now we dont need to write this.props.name & this.props.location, instead we can directly use name and location as to pass props.
    const {count} = this.state; //here we destructure as now we dont need to write this.state.count, instead we can directly use count as to use state variables.
    const {name, avatar_url} = this.state.userInfo;
    return (
        <div className="flex justify-center p-4">
      <div className="border border-black rounded-lg p-6 mb-9 mx-5 bg-blue-100">
        <h2 className="text-center text-2xl mb-4">Github Profile</h2>
        <img src={avatar_url} className="rounded-full mx-auto mb-4" alt="PFP" />
        <h2 className="text-3xl text-center mb-2">Name: {name}</h2>
        <h3 className="text-2xl text-center mb-2">Location: India</h3>
        <h3 className="text-2xl text-center mb-4">Email: abc123@gmail.com</h3>
        {/*  
        <p className="inline-block">
          State Variables : Count : {count} : 
          <button 
            onClick={() => {
                this.setState({
                    count: this.state.count+1,
                });
            }} 
            className="border border-black mx-1 px-2 py-1 rounded-full hover:bg-blue-600 hover:text-white transition-colors"
          >
            Increment Count
          </button>
        </p>
        */}
      </div>
    </div>
    );
  }
}

export default UserClass;