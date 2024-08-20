function Header({headerInfo,cname,children}){
    return (
        <div>
            <h3>Header Part</h3>
            {children}
            <h1>{headerInfo.email} {cname}</h1>
            <div>Hello</div>
        

        </div>
        
    )
}

export default Header;