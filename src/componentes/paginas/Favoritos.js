import React from 'react'
import { Row,Card,Col,Button} from 'react-bootstrap'

const Eliminar=()=>{
  console.log('Agregar al Carrito');
}

const favoritos = ({data}) => {
  return (
    <div>
             <br></br>
             <div>
             <h1>API START WARS</h1>  
             </div>
            <h3 className="card-title">Personajes</h3>
            <h  className="card-text" >Lista de Personajes</h>
         
             <br/>
             <br/> 
            <div className="container">
                      <Row xs={1} md={2} className="g-4">
                      {data.length > 0 && data.map((personaje,i)=>{
                              return(
                                
                                <Col key={i}>
                                <Card >
                                  <Card.Img variant="top" src="./start_wars.jpg"/>
                                  <Card.Body>
                                    <Card.Title><h1>{personaje.name}</h1></Card.Title>
                                    <Card.Text>Altura: { personaje.height} </Card.Text>
                                    <Card.Text>Peso: { personaje.mass} </Card.Text>
                                    <Card.Text>Genero: { personaje.gender} </Card.Text>
                                    <Card.Text>Color de Cabello: { personaje.hair_color} </Card.Text>
                                    <Card.Text>Color de ojos: { personaje.eye_color} </Card.Text>
                                    <Card.Text>Fecha Nacimiento: { personaje.birth_year} </Card.Text>
                                    <Button variant="danger" onClick={Eliminar}>
                                      Eliminar de Favoritos
                                      </Button>
                                  </Card.Body>
                                </Card>
                              </Col>
                                )
                              })} 
                      
                
                                       

                      </Row>

                

            </div>
    </div>
)

}

export default favoritos