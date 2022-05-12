import React from 'react'

const Videos = ({videos,url}) => {
  
  const videoList = videos.stream.filter(video => video.type === "video" && video.abr !== null )
    const audioList = videos.stream.filter(video => video.type === "audio")
    
  return (
    <div className='container mt-5'>
      <div className=" card-wrapper">
      <div className="content card">
      <iframe width="560" height="315" src={`https://www.youtube.com/embed/${url}`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

        {/* <img src={videos.thumbnail} className="card-img-top" alt="..." /> */}
        <div className="card-body">
        <table className="table table-success table-hover table-striped">
            <thead>
            <tr className='table-success'>
            <td colSpan={2} className="table-success fw-bolder">Video: <big> {videos.title}</big></td>
            </tr>
            </thead>
            <thead >
            <tr className='table-success'>
            <td >Resolution</td>
            {/* <td >File Size</td> */}
            <td >URL</td>
            </tr>
            </thead>
            <tbody>
            {videoList.slice(1).map(video => (
                <tr key={video.id}>
                    <td>{video.resolution}</td>
                    {/* <td>{(parseInt(video._filesize)/1000000).toFixed(2)}mb</td> */}
                    <td><a href={video.url}>Link</a></td>
                </tr>
            ))}
              </tbody>      
        </table>
        <table className="table table-success mt-5 table-hover table-striped">
            <thead>
            <tr className='table-success'>
            <td colSpan={3} className="table-success fw-bolder">Audio: <big> {videos.title}</big></td>
            </tr>
            </thead>
            <thead >
            <tr className='table-success'>
            <td >Audio Abr </td>
            <td >Audio Type </td>
            {/* <td >File Size</td> */}
            <td >URL</td>
            </tr>
            </thead>
            <tbody>
            {audioList.map(audio => (
                <tr key={audio.id}>
                    <td>{audio.abr}  </td>
                    <td>{audio.subtype}</td>
                    {/* <td>{(parseInt(audio._filesize)/10000000).toFixed(2)}mb</td> */}
                    <td><a href={audio.url}>Link</a></td>
                </tr>
            ))}
              </tbody>      
        </table>
        </div>
        </div>
      </div>
      
    </div>
  )
}

export default Videos