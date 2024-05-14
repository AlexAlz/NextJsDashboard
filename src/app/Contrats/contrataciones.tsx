'use client';

import React, { useState, useEffect } from 'react';
import { format } from 'date-fns';
import { es } from 'date-fns/locale';
import { Activity, CreditCard, DollarSign, Users } from 'lucide-react';
import { Card as CardBase, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

const obtenerDiasDelMes = () => {
  const fechaActual = new Date();
  const año = fechaActual.getFullYear();
  const mes = fechaActual.getMonth();
  const diasEnMes = new Date(año, mes + 1, 0).getDate();

  const dias = [];
  for (let i = 1; i <= diasEnMes; i++) {
    dias.push(new Date(año, mes, i));
  }
  return dias;
};

interface Operadores {
  total_activos: number;
  activos_full: number;
  activos_sencillo: number;
  activos_refri: number;
  activos_auto: number;
}

export function ContratacionesView() {
  const diasDelMes = obtenerDiasDelMes();
  const [operadores, setOperadores] = useState<Operadores | null>(null);

  useEffect(() => {
    const fetchOperadores = async () => {
      try {
        const response = await fetch('../../lib/api/operadores.ts');
        const data: Operadores = await response.json();
        setOperadores(data);
      } catch (error) {
        console.error('Error al realizar la consulta:', error);
      }
    };

    fetchOperadores();
  }, []);

  if (!operadores) {
    return <div>Cargando...</div>;
  }

  return (
    <div className="flex min-h-screen w-full flex-col">
      <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
        <div className="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-4">
          <CardBase>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Sencillo seco</CardTitle>
              <DollarSign className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{operadores.activos_sencillo}</div>
              <p className="text-xs text-muted-foreground">+20.1% from last month</p>
            </CardContent>
          </CardBase>
          <CardBase>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Full</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{operadores.activos_full}</div>
              <p className="text-xs text-muted-foreground">+180.1% from last month</p>
            </CardContent>
          </CardBase>
          <CardBase>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Refrigerado</CardTitle>
              <CreditCard className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{operadores.activos_refri}</div>
              <p className="text-xs text-muted-foreground">+19% from last month</p>
            </CardContent>
          </CardBase>
          <CardBase>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Activos hasta ahora</CardTitle>
              <Activity className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{operadores.total_activos}</div>
              <p className="text-xs text-muted-foreground">+201 since last hour</p>
            </CardContent>
          </CardBase>
        </div>
        <div className="grid gap-4 md:gap-8 lg:grid-cols-2 xl:grid-cols-3">
          {/* Div vacío de momento */}
        </div>
        <CardBase className="xl:col-span-2">
          <CardHeader className="flex flex-row items-center">
            <div className="grid gap-2">
              <CardTitle>Periodo 05</CardTitle>
              <CardDescription>Contrataciones del periodo.</CardDescription>
            </div>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>UEN</TableHead>
                  <TableHead>Meta</TableHead>
                  {diasDelMes.map((dia) => (
                    <TableHead
                      key={dia.toString()}
                      style={{ transform: 'rotate(-90deg)', whiteSpace: 'nowrap', width: '50px', height: '100px' }}
                    >
                      {format(dia, 'dd-MM-yyyy', { locale: es })}
                    </TableHead>
                  ))}
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>
                    <div className="font-medium">SencilloSeco</div>
                  </TableCell>
                  <TableCell>507</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <div className="font-medium">Full</div>
                  </TableCell>
                  <TableCell>49</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <div className="font-medium">Refrigerado</div>
                  </TableCell>
                  <TableCell>21</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </CardContent>
        </CardBase>
      </main>
    </div>
  );
}
