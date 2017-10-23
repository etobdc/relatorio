'use strict';

var ExampleCtrl = function($rootScope, $document, $timeout, $scope) {
	$scope.side = '';

	$scope.events = [
		{
			badgeClass: 'info',
			badgeIconClass: 'fa fa-users',
			title: 'Time agindo como um Time',
			when: '18/10/2017 - 08:00',
			background: 'time.mp4',
			contentHtml: 'O dia mal tinha começado quando Taylor pediu ajuda com uma tarefa, enviar eventos para o Google Analitycs, tinhamos feito poucas vezes isso <span style="font-style: italic;">(eu particularmente só com uma directive no Angular)</span>, porém todo o time <span style="font-style: italic;">(que tinha 5 minutos)</span> tentou ajudar <span style="font-style: italic;">(e aprender)</span>. <br><br> Parece pouco mas gosto de ver quando o time age como um Time, motivados, um ajudando o outro, ensinando. Nosso time é Foda!'
		}, 
		{
			badgeClass: 'info',
			badgeIconClass: 'fa fa-tasks',
			title: 'Workandoo - Tarefas e mais tarefas',
			when: '18/10/2017 - Resto da manhã',
			background: 'time.mp4',
			contentHtml: 'Muitas tarefas sendo executadas, a maior parte das tarefinhas com o Mau, inserir selo Itá Thermas, alterar valores em LP do Itá Thermas, inserir vaga no Portal RH e alterar ícones no site da AngelLira (o bixo não é faco kk).<br><br>Enquanto isso todos focados nos seus projetos, Debora no e-commerce, Taylor resolvendo a parada de eventos do Google Analitycs, Rafa e Bernardo testando AD, e eu terminando a API de busca, <br><br><span>Já era pra ter termina ela nesse dia? Sim, mas o Dokcer, essa baleia vacilona (literalmente) me fez perder horas no outro dia pra conseguir fazer ela funcionar e configurar tudo de novo, pensei em abandonar e rodar no 110.4 mas ia demorar ainda mais pra mudar tudo.</span><br><br>Taís da Sinox pediu auxílio via chat, queria saber como ordenar os produtos (¬¬) e se tinha como ordenar as categorias, como não tinha como ordenar ela pediu se ela mandasse a ordem a gente poderia alterar a ordem :p Como daria ainda mais trabalho para gente isso e colocar ordem nas categorias seria algo útil decidimos colocar a função de ordenação para as categorias, como já estava com os arquivos da API aberto já comecei a fazer... o problema é que não contava com ter problemas pra resolver kk'
		}, 
		{
			badgeClass: 'danger',
			badgeIconClass: 'fa fa-exclamation-triangle',
			title: 'AngelLira - Sistema de Motorista - e Emputecimento',
			when: '18/10/2017 - Final da manhã',
			background: 'angellira.png',
			contentHtml: 'Parei tudo que estava fazendo graças a uma mensagem do Evandro (você no caso (provavelmente só você vai ler mesmo huehue)).<br>O QUESTIONÁRIO AINDA NÃO ESTAVA APARECENDO.. pqp odeio quando coisas que eu me dedico tanto pra ficarem boas começam a dar pau kk<br><br>Foquei resolver o que estava acontecendo, testei no pc dos coleguinhas e celulares e tudo ok, n sabendo o que poderia estar acontecendo suspeitei que poderia ser cache, coloquei mais uma vez versionamento, o mau estava atualizando icones no website assim que ele atualizou online as melhorias eu testei de novo nos pcs e celulares e continuava tudo ok.. porém isso não entrava na minha cabeça pq se funciona em um lugar tem que funcionar no outro.. continuei buscando tentando lembrar o que poderia ser, como eu tinha feito aquilo até que tive a ideia de testar usando o cpf da Raquel..e adivinha, não estava funcionando... um passo mais próximo de descobrir o que era pois então era algo a ver com o usuário... o que muda de usuário pra usuário? A nota, simples assim. Tanto vc quanto a Raquel tiraram dez, se alguem atingiu a nota máxima em um teste provavelmente não iria querer faze ele novo kk por isso tinha colocado essa verificação, mas para não ter mais problema tirei essa verificação e finalmente estava satisfeito com o resultado, vendo que não era um erro e sim somente uma funcionalidade do sistema que estava funcionando muito bem obrigado só que ninguém mais se lembrava dela husahusahu'
		},
		{
			badgeClass: 'roxo',
			badgeIconClass: 'fa fa-rocket',
			title: 'Sinooooo',
			when: '18/10/2017 - 11h',
			background: 'sino.mp4',
			contentHtml: 'Fechada mais uma conta de Fee mensal e website, empresa KTB Engenharia (escritório de Joaçaba)!!!!'
		}, 
		{
			badgeClass: 'info',
			badgeIconClass: 'fa fa-tasks',
			title: 'Tarefas e mais tarefas Again',
			when: '18/10/2017 - Tarde',
			background: 'sino.mp4',
			contentHtml: 'Assim que cheguei a tarde já comecei a finalizar a ordenção de categorias e a colocar online, após isso continuei com a API de busca, fiz algo mais complexo, mas que vai ajudar pra caramba, vc passa a tabela, pode passar os campos que vc quer trazar, acrecentar quantos <b>Where</b> vc quiser, pode acrescentar o Like (obviamente já que se trata de busca), pode escolher a ordem, enfim vai ajudar pra caramba. <br><br> Os coleguinhas continuavam focados nas suas tarefas Bernardo ajustado SEO da Acessorplan que estava pegando os dados da Vacarro, Debora continuava mexendo nas parecelas do e-commerce, Rafa com o APP da seta, Mau com PMR. <br><br> Aaaim que finalizei a API de busca comecei a continuar Soster. Bernardo no final da tarde ajustou os banners da Sinox, a Taís chamou de tarde pedindo sobre isso também, agradeceu muito pela ordenação das categorias mas pediu sobre os banners kk'
		}, 		
		{
			badgeClass: 'info',
			badgeIconClass: 'fa fa-tasks',
			title: 'Workando a bit - novo dia - Quintaa ',
			when: '19/10/2017',
			background: 'tarefas.png',
			contentHtml: 'Nesse dia nada de muito especial aconteceu, cada um focado nos seus projetos e tarefas, Mau como sempre com as tarefinhas, enviando e-mail, eu fazendo Soster tentado fazer tudo funcionar tava dando mesmo problema que o Mau teve com a Contafisco por isso usei a mesma solução que ele usou lá e continuei fazendo o projeto.<br><br> A Debs não veio, tava fazendo os negocio da bolsa da universidade. Rafa continuou com o APP da Seta, Taylor com os ajustes, Bernardo com melhorias da SpeedUp. <br> A tarde tudo continuo por ai somente o Bernardo começou a catar tarefas pra fazer, foi bom ele ter liberado a pauta dele, ele conseguiu finalizar um monte de tarfinhas que ele tinha anotado pra fazer a bastante tempo, além dele fazer umas tarefas que estavam na sua pauta e outras que o Mau passou pra ele. <br><br> Aaaaaa, a Ana do comercial trouxe batata doce pra gente kk'
		},
		{
			badgeClass: 'roxo',
			badgeIconClass: 'fa fa-rocket',
			title: 'Sinooooo',
			when: '19/10/2017 - 11h',
			background: 'batata.jpg',
			contentHtml: 'Fechada cota de patrocínio Silver com a Caminhare! #HOJE2018'
		}, 
		{
			badgeClass: 'roxo',
			badgeIconClass: 'fa fa-comments-o',
			title: 'Conversas paralelas bemm interessantes',
			when: '19/10/2017 - 08:00',
			background: 'sino.mp4',
			contentHtml: 'Durante esse dia tivemos 2 conversas paralelas bemm interessantes, uma falando sobre Angular vs React, por causa do bower, como migrar para o Yarn as vantagens de usar o React e pra gente começar a aprender React para utilizar futuramente. E outra sobre o Docker e como nós conseguimos errar.. acertando kk Chegamos a conclusão que usamos o Docker nos lugares certos, API e AD, porém usamos ele da maneira errada. Usamos ele pra subir um server e jogar um monólito lá dentro, exatamente como a gente faria em qualquer servidor, não conseguimos separar em microserviços por falta de conhecimento mesmo, nós vimos a teoria como funcionaria mas não achamos nenhum lugar que explique exatamente como criar os microserviços do jeito certo, como fazer uma aplicação do zero que use microserviços. Seria muito bom usar o docker na API e no AD mas precisariamos estudar e aprender mais como utiliza-lo do jeito certo, sugestão minnha agora - Poderíamos ver com o pessoal da CodeRockr, não digo mais uma visita técinia (por mais que seria massa) mas talvez uma reunião/aula via skype ou algo assim kk A gente pode avaliar algo assim, seria massa'
		}, 
		{
			badgeClass: 'success',
			badgeIconClass: 'fa fa-user-plus',
			title: 'New Coloboradora',
			when: '20/10/2017',
			background: 'docker.png',
			contentHtml: 'Vamos ter uma nova coloborador no lugar da Bia, já que ela vai ir trabalhar/aprender com a Ana. <br><br>O nome dela é NATÁLIA BERNARDI, nossos Stalkers de plantão selecionaram estes dois perfis do Facebook que podem ser da nova colaboradora: <br><br><a href="https://www.facebook.com/naty.bernardyy?ref=br_rs">https://www.facebook.com/naty.bernardyy?ref=br_rs</a> - Mais provável<br><a href="https://www.facebook.com/natyy.bernari88?ref=br_rs">https://www.facebook.com/natyy.bernari88?ref=br_rs</a> - Menos provável<br><br>obs.: Nossos Stalkers não garantem a informação.'
		},
		{
			badgeClass: 'info',
			badgeIconClass: 'fa fa-tasks',
			title: 'Sexxtaaaa',
			when: '20/10/2017',
			background: 'natis.png',
			contentHtml: 'Além da nova coloborada cadastrada no sistema, foram feitas tarefinhas como enviar código da LP à C4, finalizada tarefa do Dashboard do CMS pelo Bernardo, além dele efetuar melhorias na Acessorplan que era somente alterar um texto. Mau ficou focado no PMR e eu novamente na soster. A Debs não veio novamente devida a bolsa da faculdade, mas ficou ajudando como pode já que o pessoal da Caliandra estava com problemas, o motoboy não estava aparacendo, mas era somente uma configuração que estava desativada. De tarde após verifica a LP do Itá Thermas, o Bernardo ligou para a Elizangela da Caliandra para explicar o que estava acontecendo e como resolver.. O piá falou muito bem explicou direito.. mas começou a chamar a Elizangela de Solange.. até o pessoal do comercial começou a rir, tentamos avisar mas ele não deu bola kk só se tcou quando tava dando tchau, ele já foi zuado bastante, mas como foi comentado infelizmente isso acontece e todo mundo um dia vai passar por isso kkk Aaaaa agora termos bolacha de Água e sal além de frutas Uhulll, já tivemos bolacha nessa sexta :D a Ana trouxe batata doce de novo! :D o pessoal tava felizão comendo as batata uhehue'
		},
		{
			badgeClass: 'warning',
			badgeIconClass: 'fa fa-user-times',
			title: 'Saída da Laís',
			when: '20/10/2017',
			background: 'bolacha.jpg',
			contentHtml: 'Momente triste do dia, era o último dia da Laís ali na ó Dois, ela passou se despedindo de todo mundo (foda duas saídas em uma semana e saber que vão sair mais logo logo..), ela quem pagou as bolachas desse dia. Pelo que soubemos ela vai abrir uma loja, já começamos a tentar vender pra ela o e-commerce :D kkk'
		},
		{
			badgeClass: 'danger',
			badgeIconClass: 'fa fa-exclamation-triangle',
			title: 'CompuFour... e a Maldição do código em produção',
			when: '20/10/2017 - 18:00',
			background: 'lais.jpg',
			contentHtml: 'Só para comentar sobre essa, o fato aconteceu terça.. porém me lembrei que ainda não tivemos reposta :/ <br><br>C4 liberou o acesso FTP para vermos o que estava acontecendo de errado no envio de currículos, porém descobrimos que a maldição do código em produção ataca novamente.. O Mau efetuou testes localmente, atualizou o código online e como sempre local funciona.. online não kk (Tô rindo mas é triste isso). <br><br>Constatamos que pode ser algo no servidor deles bloqueando o envio de anexo, Mau enviou um e-mail pra eles averiguarem isso mas até agora sem resposta...'
		}, 
		{
			badgeClass: 'roxo',
			badgeIconClass: 'fa fa-rocket',
			title: 'SW Palhoça',
			when: '20/10/2017 - 13:20',
			background: 'c4.png',
			contentHtml: 'Ao chegar na ó Dois a tarde fui convidado pelo Bernardo e pelo Hiago pra participar com eles do SW Palhoça que acontece metade do mes que vem nos dia 17, 18 e 19, como o Ale vai ser mentor nos ganhamos os ingressos e pelo que o Hiago estava vendo a ó Dois vai auxiliar com o o hotel e gasolina. Vamos arrebentar em Palhoça #GoGoGO #daleTimeeee'
		}, 
		{
			badgeClass: 'roxo',
			badgeIconClass: 'fa fa-commenting-o',
			title: 'Considerações Finais',
			background: 'sw.jpg',
			contentHtml: 'Creio que este vai ser o relatório mais estranho que vc vai ler, e provavelmente o mais fora do "Padrão Relatório"... Porém, do meu ponto de vista Relatório tem tudo a ver com Relato, como contar algo do seu ponto de vista, contar uma história. <br><br>Por isso fui totalmente informal, e bemm pessoal, escrevi exatamente como eu falaria se vc me pedisse para te contar como foi a semana, deixei de lado a visão técnica e mostrei a semana sob a minha visão, o meu ponto de vista, então.. kk espero que vc consiga entender e que goste dessa Relatório totalmente informal e pessoal kk Vlw Flwwwww'
		},
		{
			badgeClass: 'roxo',
			badgeIconClass: 'fa fa-rocket',
			title: 'Fimmm',
			background: 'time.mp4'
		}
	];

	$scope.addEvent = function() {
		$scope.events.push({
			badgeClass: 'info',
			badgeIconClass: 'glyphicon glyphicon-check',
			title: 'First heading',
			when: '3 hours ago via Twitter',
			content: 'Some awesome content.'
		});

	};
	// optional: not mandatory (uses angular-scroll-animate)
	$scope.animateElementIn = function($el) {
		$el.removeClass('timeline-hidden');
		$el.addClass('bounce-in');
		if(Number.isInteger(parseInt($el[0].classList[0]))){
			$scope.trocaFundo($el[0].classList[0]);
		}
	};
	var anterior = '';
	$scope.trocaFundo = function(index){
		if(anterior != $scope.events[index].background){
			anterior = $scope.events[index].background;
			console.log(anterior);
			console.log($scope.events[index].background);
			$('video').addClass('hidden');
			$('body').removeAttr('style');
			
			switch($scope.events[index].background.split('.')[1]) {
				case 'mp4':
					$('video').attr('src',"img/" + $scope.events[index].background);
					if($scope.events[index].background == 'sino.mp4'){
						$('video').attr('style',"width: 50%; position: fixed; opacity: 0.7; left: 25%");
					}else{
						$('video').attr('style',"width: 100%; position: fixed; opacity: 0.7;");
					}

					$('video').removeClass('hidden');
					
					break;
				default:
					$('body').attr('style','background:url("img/'+ $scope.events[index].background +'"); background-position:center;background-size:cover;background-repeat:no-repeat;background-attachment:fixed');
				break;
			}
		}
	}

	// optional: not mandatory (uses angular-scroll-animate)
	$scope.animateElementOut = function($el) {
		$el.addClass('timeline-hidden');
		$el.removeClass('bounce-in');
	};

	$scope.leftAlign = function() {
		$scope.side = 'left';
	}

	$scope.rightAlign = function() {
		$scope.side = 'right';
	}

	$scope.defaultAlign = function() {
		$scope.side = ''; // or 'alternate'
	}
};

angular.module('example').controller('ExampleCtrl', ExampleCtrl);
