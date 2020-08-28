import image from './img//3180754.jpg'
import {TitleBlock, TextBlock, TextColumns, Image, Footer} from './classes/blocks'
import { css } from './utils'

const name = 'Конструктор сайтов на JS';
const text ='Конструктор сайтов (англ. site builder) — программно реализованная сложная система для создания веб-страниц без знания языков программирования. Обычно является отдельным сервисом, но может и предоставляться как дополнительная услуга хостинг-компаниями. Существует возможность создания сайтов, как с помощью систем управления контентом (CMS), так и с помощью и SaaS-платформ';
const textcol = [
   `Объе́ктно-ориенти́рованное программи́рование (ООП) — методология программирования, основанная на представлении программы в виде совокупности объектов, каждый из которых является экземпляром определённого класса, а классы образуют иерархию наследования`, 
   `Принципы SOLID — это стандарт программирования, который все разработчики должны хорошо понимать, чтобы избегать создания плохой архитектуры. Этот стандарт широко используется в ООП.`, 
   `Вот что входит в принципы SOLID:
   Single Responsibility Principle (Принцип единственной ответственности).
   Open Closed Principle (Принцип открытости/закрытости).\n
   Liskov’s Substitution Principle (Принцип подстановки Барбары Лисков).
   Interface Segregation Principle (Принцип разделения интерфейса).
   Dependency Inversion Principle (Принцип инверсии зависимостей).`, 
   `Конструктор сайта — онлайн-платформа, на которой обычный пользователь без специальных знаний может запустить сайт и управлять им: Tilda — это простой конструктор с большим количеством функциональных возможносте, Wix — конструктор с гибким визуальным редактором, Nethouse — мощный функционал.`
];
export const model = [
   new TitleBlock (name,{tag: "h1",
      styles: css({
         background: 'linear-gradient(90deg, rgba(27,78,240,1) 0%, rgba(52,201,196,1) 46%, rgba(101,247,101,1) 100%)',
         color: 'white',
         padding: '20px',
         'text-align': 'center'
      })
   }),
   new Image (image, {
      imgstyles: css ({
         width: '400px',
         height: '400px',
      }),
      styles: css ({
         "text-align": "center"
      })
   }),
   new TextBlock ( text , {
      styles: css({
         background: 'linear-gradient(90deg, rgba(27,78,240,1) 0%, rgba(77,244,23,1) 46%, rgba(101,247,101,1) 100%)',
         color: 'white',
         'font-weight': 'bold',
         'font-size': '20px',
         padding: '1em'
   })}),
   new TextColumns ( textcol,
     {
      styles: "padding: 1rem"}
   ),

   new Footer ('Разработчик Мария Малевная', {
      styles: "background: darkblue; color: white; text-align: center; padding: 20px"
   }),

]