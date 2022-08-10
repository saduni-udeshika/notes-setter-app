import React from 'react';

const API_URL_All_Users = '/api/users/all-users';

class AllUsers extends React.Component {
   constructor(props) {
      super(props);

      this.state = {
         users: [],
         DataisLoaded: false,
      };
   }

   componentDidMount() {
      fetch(API_URL_All_Users)
         .then((res) => res.json())
         .then((json) => {
            this.setState({
               users: json,
               DataisLoaded: true,
            });
         });
   }
   render() {
      const { DataisLoaded, users } = this.state;
      if (!DataisLoaded)
         return (
            <div>
               <h1> Loading ... </h1>{' '}
            </div>
         );

      return (
         <>
            <section className="heading">
               <h1>Welcome</h1>
               <p>Users List</p>
            </section>

            <div className="content all-users">
               {users.map((user) => (
                  <>
                     <p className="allusers" key={user.id}>
                        {' '}
                        {user.firstName} {user.lastName}
                     </p>
                  </>
               ))}
            </div>
         </>
      );
   }
}

export default AllUsers;
