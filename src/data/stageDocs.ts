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
    title: '📄 Attestation de stage',
    description: 'Attestation officielle signée par la Mairie de Trappes (DSI) validant la période de stage de 3 mois (mai–juillet 2025).',
    downloadUrl: '/assets/docs/ABBASSI_Attestation_Stage_Mairie_2025.pdf',
    viewUrl: '/assets/docs/ABBASSI_Attestation_Stage_Mairie_2025.pdf',
    status: 'available',
    fileType: 'PDF',
    additionalInfo: 'Document officiel avec cachet et signature'
  },
  {
    id: 'rapport',
    title: '🎯 Dossier projet stage',
    description: 'Rapport de stage complet détaillant le contexte, les missions réalisées, l\'environnement technique, les résultats obtenus et le bilan de l\'expérience professionnelle à la Mairie de Trappes.',
    downloadUrl: `${import.meta.env.BASE_URL}docs/rapport_stage.pdf`,
    viewUrl: '/#/rapport-stage',
    status: 'available',
    fileType: 'PDF',
    additionalInfo: 'Rapport structuré : contexte entreprise, missions (cartographie droits serveurs, support GLPI/TeamViewer, gestion parc), environnement technique (Windows Server, AD, VLAN), bilan et acquis professionnels'
  },
  {
    id: 'references',
    title: '👤 Références professionnelles',
    description: 'Coordonnées et informations de contact des encadrants professionnels pour obtenir des recommandations sur les compétences techniques et soft skills démontrées durant le stage.',
    status: 'available',
    additionalInfo: `
      <div class="references-details">
        <div class="ref-item">
          <strong>Organisation :</strong> Mairie de Trappes — Direction des Systèmes d'Information (DSI)
        </div>
        <div class="ref-item">
          <strong>Période :</strong> Mai–Juillet 2025 (3 mois)
        </div>
        <div class="ref-item">
          <strong>Encadrant(e) :</strong> [Nom/Service] — <em>Disponible sur demande</em>
        </div>
        <div class="ref-item">
          <strong>Missions principales :</strong>
          <ul>
            <li>Cartographie et analyse des droits d'accès (serveur de fichiers, NTFS/ACL, PowerShell)</li>
            <li>Support utilisateurs via GLPI et TeamViewer (assistance L1/L2)</li>
            <li>Gestion du parc informatique (imprimantes, tablettes, inventaire)</li>
            <li>Découverte réseau (switchs multilayer, VLANs, segmentation)</li>
            <li>Remise à niveau de mini-PC Windows 11 (création clé USB bootable, installation/migration, pilotes)</li>
          </ul>
        </div>
        <div class="ref-item">
          <strong>Compétences validées :</strong> Administration Windows Server, Active Directory, support utilisateur, réseau (VLANs), PowerShell, ticketing (GLPI), autonomie, communication professionnelle
        </div>
      </div>
    `
  }
];
