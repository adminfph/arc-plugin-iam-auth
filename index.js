module.exports = {  
  deploy: {
    // Pre-deploy operations
     start: async ({ arc, cloudformation, dryRun, inventory, stage }) => {
       let paths = cloudformation.Resources.HTTP.Properties.DefinitionBody.paths;
       const pathsToProtect = arc['arc-plugin-iam-auth'];
      //for each configured path, map the IAM prop
      pathsToProtect.forEach(pp => { 
        let path = pp[1];
        let verb = pp[0];
        paths[path][verb]['x-amazon-apigateway-auth'] = { type: 'AWS_IAM' };  
      });       
     },
  }
}
