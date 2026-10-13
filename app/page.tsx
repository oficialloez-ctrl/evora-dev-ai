"use client";
import {useEffect,useState} from "react";
type Mission={id:string;title:string;project:string;status:"Planejada"|"Em andamento"|"Aguardando aprovação"|"Concluída"};
type Project={id:string;name:string;description:string};
const K="airon-ai-local-v1";
export default function Home(){
 const [projects,setProjects]=useState<Project[]>([]),[missions,setMissions]=useState<Mission[]>([]);
 const [name,setName]=useState(""),[description,setDescription]=useState(""),[title,setTitle]=useState(""),[project,setProject]=useState("");
 const [loaded,setLoaded]=useState(false);
 useEffect(()=>{try{const data=JSON.parse(localStorage.getItem(K)||"{}");setProjects(data.projects||[]);setMissions(data.missions||[])}catch{}setLoaded(true)},[]);
 useEffect(()=>{if(loaded)localStorage.setItem(K,JSON.stringify({projects,missions}))},[projects,missions,loaded]);
 function addProject(e:React.FormEvent){e.preventDefault();if(!name.trim())return;const id=crypto.randomUUID();setProjects(p=>[...p,{id,name:name.trim(),description:description.trim()}]);setProject(id);setName("");setDescription("")}
 function addMission(e:React.FormEvent){e.preventDefault();if(!title.trim()||!project)return;setMissions(m=>[...m,{id:crypto.randomUUID(),title:title.trim(),project,status:"Planejada"}]);setTitle("")}
 function update(id:string,status:Mission["status"]){setMissions(m=>m.map(x=>x.id===id?{...x,status}:x))}
 return <main><div className="row"><span className="pill">AIRON AI</span><span className="pill">Protótipo local</span></div><h1>AIRON <span className="brand">Dev AI</span></h1><p className="muted">Central de projetos, missões e aprovações — acessível pelo celular e notebook.</p>
 <div className="card notice"><strong>Primeira versão:</strong> você pode cadastrar projetos e organizar missões. Os dados ficam apenas neste navegador. A IA ainda não executa tarefas automaticamente; autenticação, banco de dados e executor serão integrados depois.</div>
 <div className="grid"><section className="card"><h2>Novo projeto</h2><form onSubmit={addProject}><label>Nome<input value={name} onChange={e=>setName(e.target.value)} placeholder="Ex.: Site da barbearia" required/></label><label>Descrição<textarea value={description} onChange={e=>setDescription(e.target.value)} placeholder="Objetivo do projeto"/></label><button type="submit">Criar projeto</button></form></section>
 <section className="card"><h2>Nova missão</h2><form onSubmit={addMission}><label>Projeto<select value={project} onChange={e=>setProject(e.target.value)} required><option value="">Selecione</option>{projects.map(p=><option key={p.id} value={p.id}>{p.name}</option>)}</select></label><label>O que precisa ser feito?<textarea value={title} onChange={e=>setTitle(e.target.value)} placeholder="Ex.: Criar página inicial responsiva" required/></label><button disabled={!projects.length} type="submit">Adicionar missão</button></form></section></div>
 <div className="grid"><section className="card"><h2>Projetos ({projects.length})</h2>{!projects.length?<p className="muted">Nenhum projeto cadastrado.</p>:<ul>{projects.map(p=><li key={p.id}><strong>{p.name}</strong><p className="muted">{p.description}</p></li>)}</ul>}</section>
 <section className="card"><h2>Missões ({missions.length})</h2>{!missions.length?<p className="muted">Crie sua primeira missão.</p>:<ul>{missions.map(m=><li key={m.id}><strong>{m.title}</strong><p className="muted">{projects.find(p=>p.id===m.project)?.name} · {m.status}</p><div className="row"><button className="secondary" onClick={()=>update(m.id,"Em andamento")}>Em andamento</button><button className="secondary" onClick={()=>update(m.id,"Aguardando aprovação")}>Pedir revisão</button><button className="secondary" onClick={()=>update(m.id,"Concluída")}>Concluir</button></div></li>)}</ul>}</section></div>
 </main>
}