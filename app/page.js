"use client";

import { useState, useEffect } from "react";
import Map from "@/components/map";

export default function Home() {
  const [events, setEvents] = useState([]);
  const [categories, setCategories] = useState([]);
  const [eventType, setEventType] = useState("volcanoes");

  async function getCategories() {
    const res = await fetch(`https://eonet.gsfc.nasa.gov/api/v3/categories`);
    const data = await res.json();
    setCategories(data.categories);
  }

  useEffect(() => {
    getCategories();
  }, []);

  async function getEvents() {
    const res = await fetch(
      `https://eonet.gsfc.nasa.gov/api/v3/categories/${eventType}`
    );
    const data = await res.json();
    setEvents(data.events);
    console.log(data.events);
  }

  useEffect(() => {
    getEvents();
  }, [eventType]);

  function handleSubmit(e) {
    e.preventDefault();

    getEvents();
  }

  return (
    <div>
      <div className="absolute top-6 right-6 z-[1000]">
        <form onSubmit={handleSubmit}>
          <select
            name="eventType"
            id="eventType"
            className="bg-neutral-200 text-neutral-800 text-sm font-semibold p-2 rounded-lg outline-none border-none focus:ring-2 focus:ring-neutral-600 transition shadow"
            onChange={(e) => setEventType(e.target.value)}
          >
            {categories.map((category) => (
              <option
                key={category.id}
                value={category.id}
                className="text-neutral-800 text-sm font-semibold"
              >
                {category.title}
              </option>
            ))}
          </select>
        </form>
      </div>

      <Map events={events} />
    </div>
  );
}

/*
"use client";

import Map from "@/components/map";
import { useState, useEffect} from "react";


export default function Home(){
  const [events, setEvents] = useState([]);
  const [eventType, setEventType] = useState("volcanoes");
  const [categories, setCategories] = useState([]);

  async function getCategories() {
    const res = await fetch('https://eonet.gsfc.nasa.gov/api/v3/categories');
    const data = await res.json();
    setCategories(data.categories);
  }

  useEffect(() =>{
    getCategories();
  }, []);

  async function getEvents() {
    const res = await fetch(`https://eonet.gsfc.nasa.gov/api/v3/events?category=${eventType}`);
    const data = await res.json();
    setEvents(data.events);
    console.log(data.events);
  }

  useEffect(() =>{
    getEvents();
  }, [eventType]);

  function handleSubmit(e){
    e.preventDefault();

    getEvents();
  }
        
return(
  <div>
    <div className="absolute top-6 right-6 z-[1000]">
    <form onSubmit={handleSubmit}>
      <select name="eventType" id="eventType" className="bg-neutral-200 text-neutral-800 text-sm font-semibold p-2 rounded-lg outline-none border-none focus:ring-2 focus:ring-neutral-600 transition transition shadow" onChange={(e) => setEventType(e.target.value)}>
        {categories.map((category) => (
          <option key={category.id} value={category.id} className="text-neutral-800 text-sm font-semibold">{category.title}</option>
        ))}
      </select>
    </form>
    </div>
  <Map events={events}/>
  </div>
);
}
*/
/*
"use client";

import { useState, useEffect } from "react";
import dynamic from 'next/dynamic';

// Dynamically import Map component with SSR disabled
const Map = dynamic(
  () => import('@/components/map'),
  { 
    ssr: false,
    loading: () => <p>Loading map...</p>
  }
);

export default function Home() {
  const [events, setEvents] = useState([]);
  const [eventType, setEventType] = useState("volcanoes");
  const [categories, setCategories] = useState([]);

  async function getCategories() {
    const res = await fetch('https://eonet.gsfc.nasa.gov/api/v3/categories');
    const data = await res.json();
    setCategories(data.categories);
  }

  useEffect(() => {
    getCategories();
  }, []);

  async function getEvents() {
    // Corrected API endpoint
    const res = await fetch(`https://eonet.gsfc.nasa.gov/api/v3/events?category=${eventType}`);
    const data = await res.json();
    setEvents(data.events);
  }

  useEffect(() => {
    getEvents();
  }, [eventType]);

  function handleSubmit(e) {
    e.preventDefault();
    getEvents();
  }

  return (
    <div>
      <div className="absolute top-6 right-6 z-[1000]">
        <form onSubmit={handleSubmit}>
          <select
            name="eventType"
            id="eventType"
            className="bg-neutral-200 text-neutral-800 text-sm font-semibold p-2 rounded-lg outline-none border-none focus:ring-2 focus:ring-neutral-600 transition shadow"
            onChange={(e) => setEventType(e.target.value)}
            value={eventType}
          >
            {categories.map((category) => (
              <option key={category.id} value={category.id} className="text-neutral-800 text-sm font-semibold">
                {category.title}
              </option>
            ))}
          </select>
        </form>
      </div>
      <Map events={events} />
    </div>
  );
}
*/