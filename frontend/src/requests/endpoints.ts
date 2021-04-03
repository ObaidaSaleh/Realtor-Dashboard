interface endpoint {
    name: string;
    endpoint: string;
    method: string;
}

const endpoints: endpoint[] = [
    // agents
    {
        name: "getAllAgents",
        endpoint: '/api/agent',
        method: 'GET'
    },
    {
        name: "deleteAgent",
        endpoint: '/api/agent', // /:username
        method: 'DELETE'
    }, 

    // users
    {
        name: "resetPassword",
        endpoint: '/api/user',  // /:username
        method: 'PATCH'
    },

    // projects
    {
        name: "getAllProjects",
        endpoint: '/api/projects', // /:client_id
        method: 'GET',
    },
    {
        name: 'addProject',
        endpoint: '/api/projects', // /:client_id
        method: 'POST',
    }, 
    {
        name: "getSingleProject",
        endpoint: '/api/projects', // /:client_id/:project_id: 
        method: 'GET',
    }, 
    {
        name: "deleteProject",
        endpoint: '/api/projects', // /:client_id/:project_id 
        method: 'DELETE',
    },
    {
        name: "updateProject",
        endpoint: '/api/projects', // /:client_id/:project_id 
        method: 'PATCH',
    },

    // properties
    {
        name: 'addProperty',
        endpoint: '/api/property', // /:project_id 
        method: 'POST',
    },

    {
        name: 'getAllProperties',
        endpoint: '/api/property', // /:project_id 
        method: 'GET',
    },

    {
        name: 'getSingleProperty',
        endpoint: '/api/property', // /:project_id/:property_id
        method: 'GET',
    },

    {
        name: 'deleteProperty',
        endpoint: '/api/property', // /:project_id/:property_id
        method: 'DELETE',
    },

    {
        name: 'updateProperty',
        endpoint: '/api/property', // /:project_id/:property_id
        method: 'PATCH',
    },

    // activities
    {
        name: 'addActivity',
        endpoint: '/api/property', // /:project_id/:property_id
        method: 'POST',
    },

    {
        name: 'getSingleActivity',
        endpoint: '/api/property', // /:project_id/:property_id/:activity_id
        method: 'GET',
    },

    {
        name: 'updateActivity',
        endpoint: '/api/property', // /:project_id/:property_id/:activity_id
        method: 'PUT',
    }
]

export default endpoints;