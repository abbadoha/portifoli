// src/data/stageDocs.ts
// Données centralisées pour la section "Preuves et documents" de la page Stages

export interface StageDocument {
  id: string;
  title: string;
  description: string;
  downloadUrl?: string;
  viewUrl?: string;
  status: 'available' | 'todo';
  fileType?: string;
  additionalInfo?: string;
}

export const stageDocuments: StageDocument[] = [
  {
    id: 'attestation',
    title: 'Convention / attestation de stage',
    description: 'Attestation officielle de stage réalisée à la DSI de la Mairie de Trappes sur la période mai-juillet 2025.',
    downloadUrl: '/assets/docs/ABBASSI_Attestation_Stage_Mairie_2025.pdf',
    viewUrl: '/assets/docs/ABBASSI_Attestation_Stage_Mairie_2025.pdf',
    status: 'available',
    fileType: 'PDF',
    additionalInfo: 'Document officiel signé (version publique).'
  },
  {
    id: 'rapport',
    title: 'Dossier ou rapport de stage',
    description: 'Rapport de stage présentant le contexte, les missions, l\'environnement technique et le bilan.',
    downloadUrl: `${import.meta.env.BASE_URL}docs/rapport_stage.pdf`,
    viewUrl: '/#/rapport-stage',
    status: 'available',
    fileType: 'PDF',
    additionalInfo: 'Version PDF téléchargeable et version web consultable.'
  },
  {
    id: 'references',
    title: 'Références professionnelles / cadre du stage',
    description: 'Le cadre professionnel du stage peut être confirmé en cas de besoin.',
    status: 'available',
    additionalInfo: `
      <div class="references-details">
        <div class="ref-item">
          <strong>Structure :</strong> Mairie de Trappes - Direction des Systèmes d'Information (DSI)
        </div>
        <div class="ref-item">
          <strong>Période :</strong> Mai a juillet 2025 (3 mois)
        </div>
        <div class="ref-item">
          <strong>Encadrement :</strong> <em>Disponible sur demande</em>
        </div>
        <div class="ref-item">
          <strong>Missions principales :</strong>
          <ul>
            <li>Support utilisateurs et suivi de tickets</li>
            <li>Comptes, droits d'acces et Active Directory</li>
            <li>Parc informatique (imprimantes, tablettes, inventaire)</li>
            <li>Reseau (VLANs, switches, tests de connectivite)</li>
            <li>Remise a niveau de mini-PC (installation/migration Windows)</li>
          </ul>
        </div>
        <div class="ref-item">
          <strong>Note :</strong> Les informations nominatives ne sont pas affichees publiquement.
        </div>
      </div>
    `
  }
];
