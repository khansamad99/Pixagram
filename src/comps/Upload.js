import React,{useState} from 'react';
import ProgressBar from './Progressbar';
const Upload  = () => {
    const [file,setFile] = useState(null);
    const [error,setError] = useState('');

    const types = ['image/png','image/jpg','image/jpeg'];

    const handleChange = (e) => {
        let selected  = e.target.files[0];

        if(selected && types.includes(selected.type)){
            setFile(selected);
            setError('');
        }
        else{
            setFile(null);
            setError('Please select an image file(png,jpeg,jpg)');
        }
    }
    return (
        <form>
        <label>
          <input type="file" onChange={handleChange} />
          <span>+</span>
        </label>
        <div className="output">
          { error && <div className="error">{ error }</div>}
          { file && <div>{ file.name }</div> }
          { file && <ProgressBar file={file} setFile={setFile} /> }
        </div>
      </form>   
    )
}

export default Upload;