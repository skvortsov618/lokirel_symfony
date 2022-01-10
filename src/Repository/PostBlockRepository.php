<?php

namespace App\Repository;

use App\Entity\PostBlock;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method PostBlock|null find($id, $lockMode = null, $lockVersion = null)
 * @method PostBlock|null findOneBy(array $criteria, array $orderBy = null)
 * @method PostBlock[]    findAll()
 * @method PostBlock[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class PostBlockRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, PostBlock::class);
    }

    // /**
    //  * @return PostBlock[] Returns an array of PostBlock objects
    //  */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('p')
            ->andWhere('p.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('p.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    /*
    public function findOneBySomeField($value): ?PostBlock
    {
        return $this->createQueryBuilder('p')
            ->andWhere('p.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
}
