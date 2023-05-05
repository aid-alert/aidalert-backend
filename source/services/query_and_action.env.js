db.createUser(
  {
    user: 'alert',
    pwd: 'alert',
    roles: [ { role: 'dbAdmin', db: 'alert' } ]
  }
);

db.createUser(
  {
    user: 'alert',
    pwd: 'alert',
    roles: [ { role: 'readWrite', db: 'alerts' } ]
  }
);

db.createRole(
   {
     role: "alertAdmin", 
     privileges: [
       {
         actions: anyAction,
         resource: {anyResource: true}
       }
     ],
     roles: []
   }
)