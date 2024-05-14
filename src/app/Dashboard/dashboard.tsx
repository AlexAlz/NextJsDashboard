'use client';

import React, { Suspense } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { Bell, Home, Package2, ShoppingCart, Users, LineChart } from "lucide-react";
import { Button } from '@/components/ui/button';
import UserItem from "@/components/userItem";
import { ContratacionesView } from '../Contrats/contrataciones';
// import AsistenciasView from './AsistenciasView'; // Asegúrate de que existe
// import ReporteDiarioView from './ReporteDiarioView'; // Asegúrate de que existe

function DashboardView() {
  return (
<div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr] overflow-hidden">
      <div className="hidden border-r bg-muted/40 md:block overflow-auto h-screen sticky top-0">
        {/* Aquí va tu navbar */}
        <div className="flex h-full max-h-screen flex-col gap-2 sticky top-0">
          <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
            <Link to="/" className="flex items-center gap-2 font-semibold">
              <Package2 className="h-6 w-6" />
              <span>Autotransportes Pilot</span>
            </Link>
            <Button variant="outline" size="icon" className="ml-auto h-8 w-8">
              <Bell className="h-4 w-4" />
              <span className="sr-only">Toggle notifications</span>
            </Button>
          </div>
          <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
            <Link to="/" className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary">
              <Home className="h-4 w-4" />
              Dashboard
            </Link>
            <Link to="/contrataciones" className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary">
              <ShoppingCart className="h-4 w-4" />
              Contrataciones
            </Link>
            <Link to="/asistencias" className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary">
              <Users className="h-4 w-4" />
              Asistencias
            </Link>
            <Link to="/reporte-diario" className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary">
              <LineChart className="h-4 w-4" />
              Reporte Diario
            </Link>
          </nav>
        </div>
      </div>
      <div className="flex flex-col overflow-auto">
        <header className="flex h-14 items-center gap-4 border-b bg-muted/40 px-4 lg:h-[60px] lg:px-6 sticky top-0">
          {/* Componente opcional si necesitas más elementos en el header */}
          <div className="w-full flex-1">
            <form>
              <div className="relative">
                {/* Sólo para hacer espacio */}
              </div>
            </form>
          </div>
          <UserItem /> {/* Nombre, correo y deslogueo de usuario */}
        </header>
        <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6 overflow-auto">
          <Suspense fallback={<div>Loading...</div>}>
            <Routes>
              <Route path="/" element={<div>Dashboard Main Content</div>} />
              <Route path="/contrataciones" element={<ContratacionesView/>} />
              {/* <Route path="/asistencias" element={<AsistenciasView />} />
              <Route path="/reporte-diario" element={<ReporteDiarioView />} /> */}
            </Routes>
          </Suspense>
        </main>
      </div>
    </div>
  );
}

export default DashboardView;
