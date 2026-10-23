import './App.css'
import Header from './components/Header/Header'
import Card from './components/Card/Card'

function App() {
  return (
    <div className="parent">
      <Header />   
      <div className="cards-container">
        <Card 
        username="Somya Travels" 
        image="https://images.pexels.com/photos/23476471/pexels-photo-23476471.jpeg"
        description="Explore the best mountain destinations in Leh & Ladakh." />
        <Card
        username="Manali Express"
         image="https://images.pexels.com/photos/37835752/pexels-photo-37835752.jpeg"
        description="Affordable honeymoon and family packages for Manali."  
        
        />
        <Card 
        username="Goa Beach Tours"
        image="https://images.unsplash.com/photo-1614082242765-7c98ca0f3df3?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D"
        description="Experience nightlife, beaches, and water sports in Goa."
        />
        <Card
        username="Kashish Travels"
        image="https://images.unsplash.com/photo-1614082242765-7c98ca0f3df3?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D"
        description="Experience nightlife, beaches, and water sports in Goa."
         />
          <Card 
        username="Somya Travels" 
        image="https://images.pexels.com/photos/23476471/pexels-photo-23476471.jpeg"
        description="Explore the best mountain destinations in Leh & Ladakh." />
        <Card
        username="Manali Express"
         image="https://images.pexels.com/photos/37835752/pexels-photo-37835752.jpeg"
        description="Affordable honeymoon and family packages for Manali."  
        
        />
      </div>
    </div>
  )
}

export default App