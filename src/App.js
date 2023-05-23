
import './App.css';

function Highlight({ childeren ,text ='', match ,render}) {
  const type ={

    hastag :'(#[a-z]+)',
    mention :'(@[a-z]+)' /// eğer türkçe karakterler içeriyorsa -İŞöç gibi istediğimiz harfleri zden sonra eklemeliyiz
  }[match]
  let regex = new RegExp(type || `(${match}+)`, 'gi')
  let parts = text.split(regex)
  console.log(parts)
  return parts.map(  part=>regex.test(part) ? render(part) : part )
  
}

function Home() {
  const text = "Bu bir yazı ve #Mİne  ve @minealtuğ kullanıcısını etiketini react elementi gibi vurgulamak istiyorum"
  return (
    <div >
      <Highlight
        text={text}
        match="mention"
        render={mention => <a href={`https://github.com/mialtgg?tab=repositories/${mention.replace('@','') }`} target='blank'>{mention}</a>}
      
      /> 

    </div>
  );
}

export default Home;
