function StudentInfo(props){
    return(
        <div>
            <h2>Thông tin sinh viên</h2>
            <p>Họ và tên: {props.name} </p>
            <p>MSSV : {props.id} </p>
            <p>Lớp : {props.className} </p>
        </div>
    )

}
export default StudentInfo