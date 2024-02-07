import './App.css'
import { UserList,ITEMS } from './components/UserList'
import Button from './components/Button'
function App() {
  const userName="Blog Sayfama Hoş Geldiniz"
  const users = ["Ali","Ayşe","Mehmet","Selo"]

  const isActive=true

  const products = [
    {id:1,name:"Excalibur",inStock:false},
    {id:2,name:"Excalibur2",inStock:true},
    {id:3,name:"Excalibur3",inStock:false}
  ]

const styles={
  h4Style: {backgroundColor: "blue",fontsize: "50px",color:"white"}
}
  const mapUser = users.map((user,i)=><li key={i}>{user}</li>)
  return (
    <>
        <h3 style={{backgroundColor:`${isActive?"pink":"orange"}`}}>{userName}</h3>
        
      
      <div className="bg-red">
        Şeymanur Eren<br />
      </div>  
      <hr /> 
      <h1>Hakkımda</h1>
      <p>
        Bilgisayar mühendisliği 4. sınıf öğrencisiyim.
        22 yaşındayım. Öğrenmeyi ve araştırmayı seviyorum.
        Yapay zeka ve veri bilmi alanında kendimi geliştirmek 
        için eğitimler alıyor ve projeler yazıyorum.
      </p>
      <UserList/>
      <hr />
      <h2>Fotoğraflarım</h2>
      <img src="https://avatars.mds.yandex.net/i?id=a54a5aa6ccf88d47bf598320377ead67dd65b0ce-12441729-images-thumbs&n=13" alt='' style={{padding:"4px",margin:0,borderRadius:"8px",border:"1px solid #bdc3c7"}}></img>
      <img src="https://avatars.mds.yandex.net/i?id=0e4222e09fce2b1ebb8f2d3cbe1cdda8b41a8da6-9144733-images-thumbs&n=13" alt='' style={{padding:"4px",margin:0,borderRadius:"8px",border:"1px solid #bdc3c7"}}></img>
      <img src="https://avatars.mds.yandex.net/i?id=81b22adc86a5699d82999bff91796f0015d972a9-8185766-images-thumbs&n=13" alt='' style={{padding:"4px",margin:0,borderRadius:"8px",border:"1px solid #bdc3c7"}}></img>
      <img src="https://avatars.mds.yandex.net/i?id=dd86790b5913aba1fe081c4df04d36be5d8903cd-5500087-images-thumbs&n=13" alt='' style={{padding:"4px",margin:0,borderRadius:"8px",border:"1px solid #bdc3c7"}}></img>

      
      <ImgThumbnail/>
      
      <Button/>
    </>
  )
}

function ImgThumbnail(){
  return (
    <img src="https://picsum.photos/200/300" alt='' style={{padding:"4px",margin:0,borderRadius:"8px",border:"1px solid #bdc3c7"}}></img>
  )
}

export default App
