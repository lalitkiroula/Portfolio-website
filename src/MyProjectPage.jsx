import React from "react";
import Project from "./Project"
import TicTacToe from "./TicTacToe.png"
import AskGenius from "./AskGenius.png"
import TodoApp from "./TodoApp.png"
import CodeyogiAppClone from "./CodeyogiAppClone.png"

function MyProjectPage() {
  return(
    <div className="min-h-screen bg-cyan-800">
       <div className="pt-24 sm:px-20 px-5 pb-10">
      <h1 className="text-4xl text-white font-bold sm:text-6xl underline text-center sm:text-left">My Projects</h1>
         <div className="border-b-4 border-white pb-10">
         <Project projectName= "TicTacToe" projectNumber='1.' image={TicTacToe} link="https://assignment-31-create-tic-tac-toe-game-lalitkiroula.codeyogiteam.repl.co/"> This is a simple game in which two players take turns in drawing either an ' O' or an ' X' in one square of a grid consisting of nine squares. The winner is the first player to get three of the same symbols in a row.</Project>
           </div>
         <div className="border-b-4 border-white pb-10">
         <Project projectName= "AskJudClone(AskGenius)" projectNumber='2.' image={AskGenius} link="
https://assignment-34-create-ask-jud-clone-lalitkiroula.codeyogiteam.repl.co/">This is a simple website. It is a virtual tarot. While a tarot reader is usually someone who uses cards to tell the future, Ask Genius is different. Supposedly, you can ask any question and it will give you the answer.</Project>
           </div>
         <div className="border-b-4 border-white pb-10">
         <Project projectName= "ToDo App" projectNumber='3.' image={TodoApp} link="
https://assignment-33-create-a-todo-app-lalitkiroula.codeyogiteam.repl.co/">This app is generally used to maintain our day-to-day tasks or list everything that we have to do. It is helpful in planning our daily schedules.</Project>
           </div>
         <div className=" pb-10">
         <Project projectName= "Codeyogi App Clone" projectNumber='4.' image={CodeyogiAppClone} link="
https://assignment-35-build-clone-of-student-view-of-lalitkiroula.codeyogiteam.repl.co/">This website is a clone of Codeyogi app. CodeYogi offers a totally free 6 months long software engineering training program that guarantees job to youth from low-income families.</Project>
           </div>
         </div>
    </div>
  );
}
export default MyProjectPage;