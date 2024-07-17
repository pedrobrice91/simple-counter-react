import './App.css';
import Card from "./components/Card"

function App() {
  let data = [
    {
      id:1,
      title: "Paradise",
      body: "My first body text",
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqrIaOoNLKb_PGfc_nS4s3IVBC8x7x9nYOqQ&s"
    },
    {
      id:2,
      title: "Sunrise",
      body: "My first body text",
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqrIaOoNLKb_PGfc_nS4s3IVBC8x7x9nYOqQ&s"
    },
    {
      id:4,
      title: "Moonlight",
      body: "My first body text",
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqrIaOoNLKb_PGfc_nS4s3IVBC8x7x9nYOqQ&s"
    },
    {
      id:5,
      title: "Paradise",
      body: "My first body text",
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqrIaOoNLKb_PGfc_nS4s3IVBC8x7x9nYOqQ&s"
    },
    {
      id:6,
      title: "Sunrise",
      body: "My first body text",
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqrIaOoNLKb_PGfc_nS4s3IVBC8x7x9nYOqQ&s"
    },
    {
      id:3,
      title: "Moonlight",
      body: "My first body text",
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqrIaOoNLKb_PGfc_nS4s3IVBC8x7x9nYOqQ&s"
    }
  ]

  return (
    <div className="container">
      <div className="row">
        {data.map((item, index) => {
          return <div className="col-4" key={item.id + item.title}>
            <Card title={item.title} texto={item.body} image={item.imageUrl}/>
          </div>
        })}
      </div>
    </div>
  );
}

export default App;
