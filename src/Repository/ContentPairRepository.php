<?php

namespace App\Repository;

use App\Entity\ContentPair;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method ContentPair|null find($id, $lockMode = null, $lockVersion = null)
 * @method ContentPair|null findOneBy(array $criteria, array $orderBy = null)
 * @method ContentPair[]    findAll()
 * @method ContentPair[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class ContentPairRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, ContentPair::class);
    }

    // /**
    //  * @return ContentPair[] Returns an array of ContentPair objects
    //  */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('c')
            ->andWhere('c.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('c.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    /*
    public function findOneBySomeField($value): ?ContentPair
    {
        return $this->createQueryBuilder('c')
            ->andWhere('c.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
}
