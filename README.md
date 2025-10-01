# # 📚 RAG AI Chatbot  

An AI-powered **Retrieval-Augmented Generation (RAG) Chatbot** that provides accurate, context-aware answers grounded in custom documents. Built with **Next.js, LangChain, OpenAI, and Neon (Postgres)**.  

---

## 🎯 Problem Statement  
Traditional chatbots often **hallucinate** or provide generic answers because they rely only on the model’s training data.  
The challenge was to build a chatbot that:  

- Understands user queries.  
- Retrieves relevant company or academic documents.  
- Responds with **grounded, accurate answers**.  

---

## ⚡ Solution  
I designed a **RAG pipeline** that connects an AI model with a document store:  

1. **Document Ingestion** → PDFs/text files are parsed, chunked, and embedded.  
2. **Vector Storage** → Chunks are stored in **Neon (Postgres with pgvector)** for semantic search.  
3. **Retrieval** → On each query, the top-k relevant chunks are retrieved.  
4. **Generation** → The chunks are passed into the **OpenAI LLM** (via `ai-sdk` + LangChain).  
5. **Response** → The chatbot delivers a precise, context-aware answer.  

---

## 🛠️ Tech Stack  

- **Frontend:** Next.js (App Router), TypeScript, TailwindCSS  
- **Auth:** Clerk  
- **Backend / AI:** LangChain, ai-sdk (OpenAI integration)  
- **Database:** Neon (Postgres + pgvector)  
- **Vector Search:** Semantic embeddings with LangChain  
- **Deployment:** Vercel (Frontend) + Neon Cloud (DB)  

---

## 🚀 Features  

- 🔍 Query your own documents with **RAG pipeline**  
- 📝 Upload & process PDFs into embeddings  
- ⚡ Fast semantic search using **pgvector**  
- 🔑 Secure auth with Clerk  
- 🎨 Clean, modern UI with TailwindCSS  

---

## 📊 Results  

- Reduced hallucinations significantly compared to vanilla LLM chat.  
- Delivered **highly accurate answers** grounded in uploaded documents.  
- Built a reusable RAG framework that can scale for enterprise document search and knowledge assistants.  

---

## 👤 My Role  

This was an **individual project**, where I owned:  
- End-to-end architecture and implementation.  
- Frontend + backend integration.  
- AI pipeline design with LangChain and OpenAI.  
- Deployment and optimization.  

---

## 💡 What Excites Me  

I’m passionate about building **enterprise AI systems** that move beyond “smart chatbots” to become **trusted knowledge assistants**.  
Using RAG, businesses can connect AI to their private data — unlocking use cases in customer support, onboarding, knowledge management, and decision-making.# ai_rag_chatbot
