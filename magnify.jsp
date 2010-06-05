<%@ page language="java" import="java.util.*" pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
  <title>Magnify Glass Experiment Page</title>
  <style type="text/css">
  
  body { background-color : #fff; }
  #magnify { overflow : hidden; width : 300px; height : 300px; position : absolute; z-index : 20; top : 300px; left : 300px; display : none; }
  #magnify-glass { background : url(magnify.png); width : 300px; height : 300px; position : absolute; }
  #magnify-glass.noglass { background : none !important; } 
  #magnify-iframe { -webkit-border-radius : 145px; border : 1px Solid #000; overflow : hidden; width : 290px; height : 290px; margin : 5px 0 0 5px; }
  #magnify-iframe iframe { border : 0; width : 300px; height : 300px; } 
  
  </style>
</head>
<body>

<h1>Magnify Glass Experiment Page</h1>

<h2>Latin Text Different Sizes</h2>

<p style="font-size : 13px;">In mea minim nusquam, aeque regione invidunt sed eu. Pro quot probo affert ei, his enim sensibus consequat ex, quo lucilius platonem definitionem id. Ei mundi commune atomorum sed. Reque prodesset tincidunt eum ne, vidit detracto suscipiantur ius an, persius eligendi contentiones nec eu. Eu mel modo idque principes, magna everti vidisse id eum, omnis nominavi intellegebat eum id. Has ullum recteque mediocrem et, his ut diam regione utroque, legendos oportere est ut.</p>
<p style="font-size : 12px;">Te pro laudem civibus, decore sententiae persequeris vim ne, sea ea debet ignota doctus. Altera mediocrem intellegat ius cu, cum eligendi concludaturque in, noster quaeque ancillae no eum. Ei nullam praesent repudiandae est, ea quo duis possit principes. An falli latine assueverit ius, sonet suscipit maiestatis in pri, nusquam aliquando in quo. Ius dicit nusquam necessitatibus in, ei mei vivendo pericula assueverit. Mei ut sapientem expetendis adipiscing, veniam bonorum consequuntur eam ex.</p>
<p style="font-size : 11px;">Vidit timeam has eu, numquam honestatis neglegentur te vel. Ei mea denique rationibus temporibus, scripta corpora moderatius per ex, quem maluisset maiestatis ius ne. In ius doctus voluptatum, pro id dolore partem eleifend, vix ne mutat latine intellegam. Ut vel etiam scripta appellantur, ea erat impedit argumentum mei, nec numquam sapientem eu. Quo te laudem takimata accommodare, mel aliquip pericula persequeris cu.</p>
<p style="font-size : 10px;">Admodum fierent pro eu, eu ridens labitur aliquando pro, aeque delenit ceteros cu duo. Eu pro probatus mandamus ocurreret, ne sit modus populo. Omnis moderatius incorrupte no vel, pro cu probo discere mnesarchum. Eu quis luptatum cum, id puto sonet insolens duo. Vitae libris omittantur nec an, ad nec iriure postulant urbanitas. Sed nibh veritus electram et, sed ad aeque aeterno suavitate.</p>
<p style="font-size : 9px;">Munere deseruisse sed ex, quis postea sapientem at mei. Nam soluta inermis delicatissimi an. Discere mentitum consectetuer nam an, eu regione copiosae disputationi duo. Elit laudem conclusionemque an eos, mei vocibus ocurreret at, quo an denique moderatius contentiones. Disputando suscipiantur qui no, sed epicuri reprehendunt ei, vim te rebum soleat tincidunt.</p>
<p style="font-size : 8px;">Id sale malis sea. Sed in possit melius assentior, ad est debet aeterno adolescens. Quo elitr elaboraret an, eum wisi probo homero te. Sit te quidam nominavi. Feugiat platonem suscipiantur eum id, mei movet temporibus suscipiantur ut, eu modo tota nullam his.</p>
<p style="font-size : 7px;">Nam hinc eros nemore te. Solum dicam imperdiet sed ne, impedit dolorem pri et, in vel appetere iracundia similique. Ne movet populo efficiantur nec, mei omnes vidisse assueverit ea. Tollit molestie repudiare ex his, vis dicam putant inimicus no. Sed at dolorem offendit ponderum.</p>
<p style="font-size : 6px;">Qui dicit deserunt rationibus et, has ancillae maiestatis deseruisse cu. Ignota nemore iriure per eu. Lorem molestie voluptatibus ne sea, sed ad solet aliquid, per quodsi similique vituperatoribus et. At mea nobis dicunt tractatos, ut volumus quaerendum referrentur est, putant aperiri delenit sed no. Sensibus similique pertinacia ex mel, ad qui consul omnium constituam. Ad vel minim legere minimum, homero labitur mentitum at eum, ex vim putent docendi.</p>
<p style="font-size : 5px;">An unum adipisci constituam pri, ex tale harum vituperatoribus vis. Mel no altera maiorum deserunt. Idque eleifend platonem eu est, nec amet scribentur consectetuer ei, no sed posse pericula. Ei ferri graeco posidonium nec, justo consequat repudiandae pro at.</p>
<p style="font-size : 4px;">Enim lucilius reprehendunt duo no, est ad alia habeo periculis. Modo consul ei vix, diam aliquip eleifend sea ei. Nam aperiri placerat mediocritatem ne, etiam labitur partiendo usu ad, inani causae in mel. Tritani tamquam placerat cu ius, eam te ignota causae liberavisse. Vide facer aeque usu ei, ei elitr mollis eirmod quo. Et eam altera molestiae.</p>

<h2>Image</h2>

<img src="map.jpg" width="1024" />

<div id="magnify">
  <div id="magnify-glass"></div>
  <div id="magnify-iframe">
      <iframe src="http://localhost:8080/labs/magnify/magnify.jsp" scrolling="no" id="magnifyiframe"></iframe>
  </div>
</div>

<script type="text/javascript" src="mootools-1.2.4-core.js"></script>
<script type="text/javascript" src="magnify.js"></script>

</body>
</html>
