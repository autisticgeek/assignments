import React from 'react';
import Nav from "./Nav/";
import Header from "./Header/";
import Main from "./Main/"
import Footer from "./Footer/"
let url = window.location.href.split('?');
console.log(url[1])




let mainContent = {
    headerId:"index1",
    header:"P",
    content:<div className="container">
    <section>
        <p><span className="strong">Lorem ipsum</span> dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
            magna aliqua. Mi tempus imperdiet nulla malesuada pellentesque elit. Viverra maecenas accumsan lacus
            vel facilisis volutpat est velit egestas. Sed risus ultricies tristique nulla aliquet enim tortor at
            auctor. Mi proin sed libero enim sed faucibus. Semper eget duis at tellus at urna. Aenean sed adipiscing
            diam donec. Viverra maecenas accumsan lacus vel facilisis volutpat. Mauris augue neque gravida in fermentum.
        Dictum fusce ut placerat orci nulla pellentesque dignissim. Mauris sit amet massa vitae tortor.</p>
        <p>Volutpat odio facilisis mauris sit. Auctor augue mauris augue neque gravida in fermentum et sollicitudin.
            Blandit turpis cursus in hac. Scelerisque in dictum non consectetur a erat nam. Eu scelerisque felis
            imperdiet proin fermentum leo. Fames ac turpis egestas sed tempus urna et pharetra. Blandit libero volutpat
            sed cras ornare arcu dui vivamus. Aliquam id diam maecenas ultricies mi. Sed lectus vestibulum mattis
        ullamcorper velit sed. Ultrices mi tempus imperdiet nulla. Tortor dignissim convallis aenean et tortor.</p>
        <p>Lacus sed viverra tellus in. Maecenas sed enim ut sem viverra aliquet eget sit. Velit dignissim sodales ut
            eu sem integer vitae justo eget. Sed id semper risus in hendrerit gravida. Nunc sed id semper risus in
            hendrerit gravida rutrum. A condimentum vitae sapien pellentesque habitant morbi tristique senectus.
            Tincidunt eget nullam non nisi est sit amet facilisis magna. Rhoncus mattis rhoncus urna neque viverra
            justo nec. Malesuada proin libero nunc consequat interdum varius. Purus gravida quis blandit turpis cursus
            in hac habitasse. Consectetur libero id faucibus nisl tincidunt eget. Scelerisque fermentum dui faucibus
            in ornare quam viverra. Sed adipiscing diam donec adipiscing. Tellus integer feugiat scelerisque varius
            morbi enim nunc faucibus. Tempus quam pellentesque nec nam aliquam sem et tortor consequat. Nunc sed
        blandit libero volutpat sed cras ornare. Aenean pharetra magna ac placerat vestibulum lectus mauris.</p>
        <p>Interdum velit laoreet id donec ultrices tincidunt arcu non sodales. Euismod lacinia at quis risus. Pellentesque
            sit amet porttitor eget dolor morbi non arcu risus. Justo donec enim diam vulputate ut pharetra. A diam
            maecenas sed enim ut sem. Volutpat blandit aliquam etiam erat velit scelerisque in. In fermentum et sollicitudin
            ac orci. Aliquam nulla facilisi cras fermentum odio. Diam vulputate ut pharetra sit. Dui ut ornare lectus
            sit.
    </p>
        <p>Lobortis mattis aliquam faucibus purus in massa tempor nec. Justo donec enim diam vulputate ut pharetra.
            Tortor at risus viverra adipiscing at in tellus integer feugiat. At auctor urna nunc id cursus. Vulputate
            dignissim suspendisse in est ante. Enim ut sem viverra aliquet eget sit amet. Vel quam elementum pulvinar
            etiam non quam lacus. Elit ullamcorper dignissim cras tincidunt lobortis. Vitae auctor eu augue ut lectus
        arcu bibendum at. Nisi est sit amet facilisis magna. Posuere lorem ipsum dolor sit amet.</p>
        <p>Id diam maecenas ultricies mi eget mauris pharetra et ultrices. Enim neque volutpat ac tincidunt vitae semper
            quis lectus. Mattis nunc sed blandit libero volutpat sed cras ornare arcu. Lobortis mattis aliquam faucibus
            purus. Ornare massa eget egestas purus viverra. Mattis rhoncus urna neque viverra justo nec ultrices.
            Tellus at urna condimentum mattis. Quis auctor elit sed vulputate mi sit amet. Ipsum suspendisse ultrices
            gravida dictum fusce. Morbi tincidunt augue interdum velit euismod in. Mi quis hendrerit dolor magna
            eget est lorem ipsum. Magna eget est lorem ipsum dolor sit amet consectetur adipiscing. Fringilla urna
        porttitor rhoncus dolor purus non enim praesent.</p>
    </section>
    <aside>
        <p>Enim praesent elementum facilisis leo. Volutpat consequat mauris nunc congue nisi vitae suscipit. Nisi scelerisque
            eu ultrices vitae auctor eu augue. Fermentum dui faucibus in ornare quam viverra orci sagittis. Nunc
            scelerisque viverra mauris in aliquam. Mollis aliquam ut porttitor leo a. Suspendisse ultrices gravida
            dictum fusce ut. Fames ac turpis egestas integer eget aliquet nibh. Condimentum vitae sapien pellentesque
            habitant morbi tristique senectus et netus. Proin fermentum leo vel orci porta non pulvinar. Sem et tortor
            consequat id porta nibh venenatis cras sed. Dignissim convallis aenean et tortor at. Magna fringilla
            urna porttitor rhoncus dolor purus non enim. Tellus orci ac auctor augue mauris augue neque gravida in.
            Viverra suspendisse potenti nullam ac tortor vitae purus. Facilisis mauris sit amet massa vitae tortor.
            At ultrices mi tempus imperdiet nulla malesuada pellentesque elit eget. Euismod quis viverra nibh cras
        pulvinar mattis. </p>
    </aside>
</div>};
let figi = {
    headerId: "fiji1",
    header:"Fiji",
    content: <div className="container">
    <section>
        <p>Fiji is an archipelago of more than 330 islands, of which 110 are permanently inhabited, and more than 500
        islets, amounting to a total land area of about 18,300 square kilometres (7,100 sq mi).</p>
        <p>The majority of Fiji's islands were formed through volcanic activity starting around 150 million years ago.
        Today, some geothermal activity still occurs on the islands of Vanua Levu and Taveuni.[17]</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
            magna aliqua. Mi tempus imperdiet nulla malesuada pellentesque elit. Viverra maecenas accumsan lacus
            vel facilisis volutpat est velit egestas. Sed risus ultricies tristique nulla aliquet enim tortor at
            auctor. Mi proin sed libero enim sed faucibus. Semper eget duis at tellus at urna. Aenean sed adipiscing
            diam donec. Viverra maecenas accumsan lacus vel facilisis volutpat. Mauris augue neque gravida in fermentum.
        Dictum fusce ut placerat orci nulla pellentesque dignissim. Mauris sit amet massa vitae tortor.</p>
        <p>Volutpat odio facilisis mauris sit. Auctor augue mauris augue neque gravida in fermentum et sollicitudin.
            Blandit turpis cursus in hac. Scelerisque in dictum non consectetur a erat nam. Eu scelerisque felis
            imperdiet proin fermentum leo. Fames ac turpis egestas sed tempus urna et pharetra. Blandit libero volutpat
            sed cras ornare arcu dui vivamus. Aliquam id diam maecenas ultricies mi. Sed lectus vestibulum mattis
        ullamcorper velit sed. Ultrices mi tempus imperdiet nulla. Tortor dignissim convallis aenean et tortor.</p>
        <p>Lacus sed viverra tellus in. Maecenas sed enim ut sem viverra aliquet eget sit. Velit dignissim sodales ut
            eu sem integer vitae justo eget. Sed id semper risus in hendrerit gravida. Nunc sed id semper risus in
            hendrerit gravida rutrum. A condimentum vitae sapien pellentesque habitant morbi tristique senectus.
            Tincidunt eget nullam non nisi est sit amet facilisis magna. Rhoncus mattis rhoncus urna neque viverra
            justo nec. Malesuada proin libero nunc consequat interdum varius. Purus gravida quis blandit turpis cursus
            in hac habitasse. Consectetur libero id faucibus nisl tincidunt eget. Scelerisque fermentum dui faucibus
            in ornare quam viverra. Sed adipiscing diam donec adipiscing. Tellus integer feugiat scelerisque varius
            morbi enim nunc faucibus. Tempus quam pellentesque nec nam aliquam sem et tortor consequat. Nunc sed
        blandit libero volutpat sed cras ornare. Aenean pharetra magna ac placerat vestibulum lectus mauris.</p>
    </section>
    <aside>
        <p>Interdum velit laoreet id donec ultrices tincidunt arcu non sodales. Euismod lacinia at quis risus. Pellentesque
            sit amet porttitor eget dolor morbi non arcu risus. Justo donec enim diam vulputate ut pharetra. A diam
            maecenas sed enim ut sem. Volutpat blandit aliquam etiam erat velit scelerisque in. In fermentum et sollicitudin
            ac orci. Aliquam nulla facilisi cras fermentum odio. Diam vulputate ut pharetra sit. Dui ut ornare lectus
        sit.</p>
    </aside>
</div>}
    
switch (url[1]) {
    case "figi":
                mainContent = figi;
                break;
            default:
                break;
        }
        
function App() {
    return (
        <div className="wrapper">
                <Nav />
                <Header content={mainContent.header} id={mainContent.headerId} />
                <Main content={mainContent.content} />
                <Footer />
            </div>
            );
        
        
        }
        
export default App