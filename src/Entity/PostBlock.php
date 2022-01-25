<?php

namespace App\Entity;

use App\Repository\PostBlockRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass=PostBlockRepository::class)
 */
class PostBlock
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="text", nullable=true)
     */
    private $text;

    /**
     * @ORM\ManyToOne(targetEntity=Post::class, inversedBy="body")
     * @ORM\JoinColumn(nullable=false)
     */
    private $post;

    /**
     * @ORM\Column(type="string", length=50)
     */
    private $type;

    /**
     * @ORM\ManyToMany(targetEntity=Image::class)
     */
    private $images;

    public function __construct()
    {
        $this->images = new ArrayCollection();
    }

    public static function newWithParams($post, $type, $text, $images) {
        $new = new PostBlock();
        $new->setPost($post);
        $new->setType($type);
        $new->setText($text);
        foreach ($images as $image) {
            $new->addImage($image);
        }
        return $new;
    }

    public function getFullValues() {

        return [
            'id'=>$this->getId(),
            'type'=>$this->getType(),
            'text'=>$this->getText(),
            'images'=>$this->getImagesValues()
        ];
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getText(): ?string
    {
        return $this->text;
    }

    public function setText(?string $text): self
    {
        $this->text = $text;

        return $this;
    }

    public function getPost(): ?Post
    {
        return $this->post;
    }

    public function setPost(?Post $post): self
    {
        $this->post = $post;

        return $this;
    }

    public function getType(): ?string
    {
        return $this->type;
    }

    public function setType(string $type): self
    {
        $this->type = $type;

        return $this;
    }

    /**
     * @return Collection|Image[]
     */
    public function getImages(): Collection
    {
        return $this->images;
    }

    public function getImagesValues()
    {
        $images = $this->images;
        $result = [];
        foreach ($images as $image) {
            $result[] = [
                'id'=>$image->getId(),
                'link'=>$image->getLink(),
                'alt_text'=>$image->getAltText()
            ];
        }
        return $result;
    }

    public function addImage(Image $image): self
    {
        if (!$this->images->contains($image)) {
            $this->images[] = $image;
        }

        return $this;
    }

    public function removeImage(Image $image): self
    {
        $this->images->removeElement($image);

        return $this;
    }
}
