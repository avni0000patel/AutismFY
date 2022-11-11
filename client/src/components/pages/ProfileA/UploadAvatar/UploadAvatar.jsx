import React from 'react'
import axios from 'axios'

const Form = (props) => {
  // a local state to store the currently selected file.
  const [selectedFile, setSelectedFile] = React.useState(null)

  const handleSubmit = async(event) => {
    event.preventDefault()
    const formData = new FormData()
    formData.append("selectedFile", selectedFile)
    axios
        .post("http://localhost:3001/api-posts/uploadPhoto", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
        })
        .then((res) => {
            axios.post('http://localhost:3001/api-posts/save-photo',
            {
                id:'636ab6fbcb098d199d127688',
                nameFile:res.data.nameFile,
                key: res.data.key
            })
              .then((res)=>{ 
                props.setProfile(res.data)
                props.reloadWithImg()
              })
        })
        .catch((err) => {
          console.log(err)
        })
  }

  const handleFileSelect = (event) => {
    setSelectedFile(event.target.files[0])
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="file" onChange={handleFileSelect}/>
      <input type="submit" value="Upload File" />
    </form>
  )
}

export default Form