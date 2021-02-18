


const bananeSrc = "https://upload.wikimedia.org/wikipedia/commons/f/f7/Bananas.svg";
const bananeEmoji = "https://images.emojiterra.com/google/android-11/512px/1f34c.png";
const niveauEmoji = "https://images.emojiterra.com/google/android-11/512px/2b50.png";
const singeEmoji = "https://images.emojiterra.com/google/android-11/512px/1f412.png";
const gorilleEmoji = "https://images.emojiterra.com/google/android-11/512px/1f98d.png";

const succesBananes100 = "Succès! 100 bananes collectées !"
const succesBananes1000 = "Succès! 1000 bananes collectées !"
const succesAmis50 = "Succès! 50 nouveaux amis !"
const succesNiv2 = "Succès! Niveau 2 atteint !"


  class Tittle extends React.Component{
    render(){

      return(
        <div className ="Tete">
          <Clicker classname="BananeTitre" onClick={this.props.onClick} src={bananeSrc}/>
          <Clicker classname="BananeTitre" onClick={this.props.onClick} src={bananeSrc}/>
          <Clicker classname="BananeTitre" onClick={this.props.onClick} src={bananeSrc}/>
          <div className="Titre">{this.props.name}</div>
          <Clicker classname="BananeTitre" onClick={this.props.onClick} src={bananeSrc}/>
          <Clicker classname="BananeTitre" onClick={this.props.onClick} src={bananeSrc}/>
          <Clicker classname="BananeTitre" onClick={this.props.onClick} src={bananeSrc}/>
        </div>
      )
    }
  }

  class Colonne1 extends React.Component{
    render(){

      return(
        <div className="Colonne">
          <div className = "Conteneur">
            <div>
              Niveau : 
            </div>
            <div className ="CompteurCompteur">
             <Compteur name="Niveau" counter = {this.props.niveau} /> 
             <Logo name="niveau" src={niveauEmoji}/> <br/>
            </div>
          </div>

          <div className = "Conteneur">
            <div>
              Bananes : 
            </div>
            <div className ="CompteurCompteur">
              <Compteur name="Bananes" counter = {this.props.counterBanane}/> 
              <Clicker classname="Logo" name="banane" src={bananeEmoji} onClick={this.props.onClick} /><br/>
            </div>  
          </div>    

          <div className = "Conteneur">
            <div>
              Singes : 
            </div>
            <div className ="CompteurCompteur">
              <Compteur name="Singe" counter = {this.props.singes}/>  
              <Logo name="singe" src={singeEmoji} onClick={this.props.onClick}/>
            </div>
          </div>

          {this.props.niveau>=2 &&
            <div className = "Conteneur">
              <div>
                Gorilles : 
              </div>
              <div className ="CompteurCompteur">
                <Compteur name="Gorille" counter = {this.props.gorilles}/>  
                <Logo name="gorille" src={gorilleEmoji}/>
              </div>
           </div>  
          }         
          <div className= "Recrues" >
            {this.props.recrues.map((recrue, index) => <Logo key= {index} name={recrue.name} src={recrue.src}/>)}
          </div>
        </div>
      )
    }
  }

  class Logo extends React.Component{
    render(){

      return(
          <img className="Logo" src={this.props.src} alt={this.props.name}/>
      )
    }
  }

  class ButtonRecruter extends React.Component{
    render(){

      return(
        <div>        
          <button className="ButtonRecrue" onClick={this.props.onClick}
          disabled={(this.props.dispo>0?false:true)}>         
          {this.props.dispo} <Logo src={this.props.src} alt={this.props.name}/></button>
        </div>
      )
    }
  }



  class Colonne2 extends React.Component{
    render(){

      return(
        <div className="ClickerCentral">
          <Clicker  classname="Banane" onClick={this.props.onClick} src={bananeSrc}/>                   
        </div>
      )
    }
  }

  class Colonne3 extends React.Component{
    render(){

      return(
        <div className="Colonne">
          <div className = "Conteneur">Informations : </div>
          <div className = "ConteneurTextConsignes">
            <p>Récoltes des bananes pour passer des niveaux! </p>
            <p>Nouvelles recrues toutes les 30 secondes !</p>
            <div className="BoutonRecrutement">
              {this.props.singesDispos>=1 && 
                <Recruter classname="Recruter" src= {singeEmoji} alt="singe"
          onClick={this.props.onClickSinge} dispo={this.props.singesDispos}/>}
          {this.props.gorillesDispos>=1 && 
                <Recruter classname="Recruter" src= {gorilleEmoji} alt="gorille"
          onClick={this.props.onClickGorille} dispo={this.props.gorillesDispos}/>}

            </div>
          </div>
          
          <div className = "Conteneur"> Succès : </div>
          <div className = "ConteneurText">{this.props.succes.map((succes, index) => 
            <div key={index}>
              {succes}
            </div>)}
          </div>
          <br/>
          </div>
      )
    }
  }

  class Clicker extends React.Component{
    render(){

      return(
          <img className={this.props.classname} src= {this.props.src} alt="clicker" 
          onClick={this.props.onClick}
          ></img>
      )
    }
  }

  class Recruter extends React.Component{
    render(){

      return(
        <div className="Container">
          <img className={this.props.classname} src= {this.props.src} alt={this.props.name}
          onClick={this.props.onClick} disabled={(this.props.dispo>0?false:true)}
          ></img>
          <div className="centered" onClick={this.props.onClick}>{this.props.dispo}</div>
          </div>
      )
    }
  }

  class Compteur extends React.Component{
    render(){

      return(

          <div className="CompteurCompteur">
            {this.props.counter}
          </div>  
      )
    }
  }

  // App est l'élément qui servira de base pour votre application, c'est son point d'entrée.
  class App extends React.Component {
 
    constructor() {
            super();
            this.state = {
              counter: 0,
              singes: 0,
              singesDispos: 0,
              gorillesDispos: 0,
              gorilles: 0,
              bananaPerSecond: 1,
              niveau: 0,
              objectifs:[5,10,100,1000,10000,100000],
              succes : [], 
              recrues: [],         
              };

            this.incrementCounter = this.incrementCounter.bind(this);
            this.recruitMonkey = this.recruitMonkey.bind(this);
            this.recruitGorille = this.recruitGorille.bind(this);
            this.updateBananeCounter = this.updateBananeCounter.bind(this);
            this.arrivageRecrues = this.arrivageRecrues.bind(this);

            this.interval = setInterval(
              this.updateBananeCounter
            , 1000);
            this.interval = setInterval(
              this.arrivageRecrues
              , 30000);
    }

    componentDidUpdate(previousProps, previousState) {

      if (this.state.counter > this.state.objectifs[this.state.niveau]){
        this.setState({
          niveau: this.state.niveau+1,
        })
      }

      if (this.state.niveau>previousState.niveau){
        this.setState({
          gorillesDispos: this.state.gorillesDispos+1,
          singesDispos: this.state.singesDispos+5,
        })
      }

      let succesActuel = [];

      if (this.state.counter >=100){
        succesActuel.push(succesBananes100)
      }
      if (this.state.counter >=1000){
        succesActuel.push(succesBananes1000)
      }
      
      if (this.state.singes+this.state.gorilles >=50){
        succesActuel.push(succesAmis50)
      }

      if (this.state.niveau>=2){
        succesActuel.push(succesNiv2)
    
      }   

      if (this.areDifferentArrays(succesActuel, previousState.succes)) {
        this.setState({
          succes: succesActuel,
        })
      }
    }

    render() {

      return (
        <div className="App">
          <Tittle name="BANANE CLICKER" className="Titre" onClick = {this.incrementCounter}/>
          <div className="Corps">
            <Colonne1 className="Colonne" 
            counterBanane = {this.state.counter} 
            onClick = {this.incrementCounter}
            // onClickSinge={this.recruitMonkey}
            // onClickGorille= {this.recruitGorille}
            singes={this.state.singes}
            recrues={this.state.recrues}

            gorilles= {this.state.gorilles}

            niveau={this.state.niveau}/>
            <Colonne2 className="Colonne" onClick = {this.incrementCounter}/>
            <Colonne3 className="Colonne"
                        succes={this.state.succes}
                        onClickSinge={this.recruitMonkey}
                        gorillesDispos={this.state.gorillesDispos}
                        singesDispos={this.state.singesDispos}
             onClickGorille= {this.recruitGorille}/>
          </div>

        </div>   
      )
    }
   
    areDifferentArrays(array1, array2) {
      if(array1.length !== array2.length) {
          return true;
      }

      for (let i = 0; i < array1.length ; i++) {
          if (array1[i] !== array2[i]) {
              return true;
          }
      }

      return false;
    }

    arrivageRecrues(){
      let randomGorilles = 3*Math.round(Math.random());
      let randomSinges = 5*Math.round(Math.random());

      this.setState({
        gorillesDispos: this.state.gorillesDispos+randomGorilles,
        singesDispos: this.state.singesDispos+randomSinges,
      })      
    }

    incrementCounter() {
      this.setState({
        counter: this.state.counter+1
      })
    }

    updateBananeCounter(){
      this.setState({
        counter: this.state.counter + this.state.bananaPerSecond*(this.state.singes+(10*this.state.gorilles))
      })
    }

    recruitMonkey(){
      let recrues = this.state.recrues;

      recrues.push({name: "singe", src: singeEmoji})
      this.setState({
        singes: this.state.singes+1,
        singesDispos: this.state.singesDispos-1,
        recrues: recrues,
      })
    }

    recruitGorille(){
      let recrues = this.state.recrues;

      recrues.push({name: "gorille", src: gorilleEmoji})
      this.setState({
        gorilles: this.state.gorilles+1,
        gorillesDispos: this.state.gorillesDispos-1,
        recrues: recrues,
      })
    }

    upLevel(){
      this.setState({
        niveau: this.state.niveau+1,
      })
    }

  }

  // Rendu dans le DOM
  ReactDOM.render(
    <App/>,
    document.getElementById('root')
  );

