"use client"
import { useRouter } from 'next/navigation';

const LogoutButton: React.FC = () => {
  const router = useRouter();

  const deconnexion = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Faire une requête au serveur pour effacer le cookie
    await fetch('http://localhost:3001/logout', { method: 'GET' });

console.log("ok");
    // Rediriger l'utilisateur
    // router.push('/login');
};

  return (
    <form  onClick={deconnexion}>
    <button type='submit'>Déconnexion</button>
    </form>
  );
};

export default LogoutButton;