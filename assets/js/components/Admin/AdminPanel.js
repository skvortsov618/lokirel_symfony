import React from 'react'

const AdminPanel = () => {

    const [role, setRole] = React.useState(getCookie('lokirel_auth'))
    
    return (
        <div>
            lorem<br/>
            lorem<br/>
            lorem<br/>
        </div>
    );
}

export default AdminPanel;