import Head from 'next/head'
import { useState } from 'react';
import Autocomplete from '../components/Autocomplete'
import styles from '../styles/Home.module.css'

export default function Home() {
  const [selectedOption, setSelectedOption] = useState("");
  return (
    <div className="flex min-h-screen items-center justify-center">
      <Autocomplete options={['Chennai', 'Mumbai', 'Bangalore']} 
        value={selectedOption}
        onChange={setSelectedOption}
      />
    </div>
  )
}
