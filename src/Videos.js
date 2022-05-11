import React from 'react'

const Videos = ({videos}) => {
  
  const videoList = videos.stream.filter(video => video.type === "video" && video.abr !== null )
    const audioList = videos.stream.filter(video => video.type === "audio")
console.log(audioList)
    
  return (
    <div className='container mt-5'>
      <div className=" card-wrapper">
      <div className="content card">
        <img src={videos.thumbnail} className="card-img-top" alt="..." />
        <div className="card-body">
            <h4 className="card-text text-danger fw-bolder">{videos.title}</h4>
        </div>
        <table className="table table-success table-hover table-striped">
            <thead>
            <tr className='table-success'>
            <td colSpan={3} className="table-success">Videos</td>
            </tr>
            </thead>
            <thead >
            <tr className='table-success'>
            <td >Resolution</td>
            <td >File Size</td>
            <td >URL</td>
            </tr>
            </thead>
            <tbody>
            {videoList.slice(1).map(video => (
                <tr key={video.id}>
                    <td>{video.resolution}</td>
                    {/* {console.log((parseInt(video._filesize)/10000000).toFixed(2))} */}
                    <td>{(parseInt(video._filesize)/10000000).toFixed(2)}mb</td>
                    <td><a href={video.url}>Link</a></td>
                </tr>
            ))}
              </tbody>      
        </table>
      </div>
      </div>
      
    </div>
  )
}

export default Videos